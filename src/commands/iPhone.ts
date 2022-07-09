import type { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import Phone from '../models/Phone';
import Text from '../components/embeds/Text';
import createMobilePhoneNumber from 'random-mobile-numbers';

export = {
    data: new SlashCommandBuilder()
        .setName('iphone')
        .setDescription('iPhone Device Commands')
        .setDMPermission(false)
        .addSubcommandGroup((subcommandGroup) =>
            subcommandGroup
                .setName('messages')
                .setDescription('Messages Commands')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('text')
                        .setDescription('Text a number')
                        .addStringOption((option) =>
                            option
                                .setName('number')
                                .setDescription('The number you want to text')
                                .setRequired(true)
                        )
                        .addStringOption((option) =>
                            option
                                .setName('text')
                                .setDescription('The text you want to send')
                                .setRequired(true)
                        )
                        .addAttachmentOption((option) =>
                            option
                                .setName('image')
                                .setDescription('An image you want to send')
                                .setRequired(false)
                        )
                )

                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('new-number')
                        .setDescription('Get a new phone number')
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('remove-number')
                        .setDescription('Remove your phone number')
                )
        )
        .addSubcommandGroup((subcommandGroup) =>
            subcommandGroup
                .setName('contacts')
                .setDescription('Contacts Commands')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('add-contact')
                        .setDescription('Add a contact')
                        .addStringOption((option) =>
                            option
                                .setName('name')
                                .setDescription('The name of the contact')
                                .setRequired(true)
                        )
                        .addStringOption((option) =>
                            option
                                .setName('number')
                                .setDescription('The number of the contact')
                                .setRequired(true)
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('remove-contact')
                        .setDescription('Remove a contact')
                        .addStringOption((option) =>
                            option
                                .setName('number')
                                .setDescription('The number of the contact')
                                .setRequired(true)
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('list-contacts')
                        .setDescription('List your contacts')
                )
        ),

    async execute(interaction: CommandInteraction) {
        if (interaction.options.getSubcommand() === 'text') {
            Phone.find(
                { number: `${interaction.options.getString('number')}` },
                'discordId number contacts',
                async (err, phone) => {
                    if (err) console.log(err);
                    Text.setDescription(
                        `${interaction.options.getString('text')}`
                    );
                    Text.setAuthor({
                        name: 'Unknown Number',
                    });
                    if(phone[0].number) Text.setAuthor({ name: `${phone[0].number}` });
                    if(phone[0].contacts.length > 0) {
                        phone[0].contacts.forEach(contact => {
                            //@ts-ignore
                            if(contact.number === interaction.options.getString('number')) {
                                //@ts-ignore
                                Text.setAuthor({
                                    name: contact.name,
                                });
                            }
                        }
                        )
                    }
                    if (interaction.options.getAttachment('image')) {
                        Text.setImage(
                            `${
                                interaction.options.getAttachment('image')
                                    ?.proxyURL
                            }`
                        );
                    }
                    

                    await interaction.client.users.cache
                        .get(phone[0].discordId)
                        ?.send({ embeds: [Text] });
                    await interaction.reply({
                        content: 'Text Sent!',
                        ephemeral: true,
                    });
                }
            );
        } else if (interaction.options.getSubcommand() === 'new-number') {
            Phone.find(
                //@ts-ignore
                { discordId: `${interaction.member?.id}` },
                'number',
                async (err, phone) => {
                    if (err) console.log(err);
                    if (phone.length > 0) {
                        await interaction.reply({
                            content: 'You already have a phone number!',
                            ephemeral: true,
                        });
                    } else {
                        const number = createMobilePhoneNumber();
                        const newPhone = new Phone({
                            //@ts-ignore
                            discordId: `${interaction.member?.id}`,
                            number: `${number}`,
                        });
                        await newPhone.save();
                        await interaction.reply({
                            content: `Your new phone number is ${number}`,
                            ephemeral: true,
                        });
                    }
                }
            );
        } else if (interaction.options.getSubcommand() === 'remove-number') {
            Phone.findOneAndRemove(
                { discordId: `${interaction.member?.user.id}` },
                null,
                (err) => {
                    if (err) console.log(err);
                }
            );
            await interaction.reply({
                content: `Your phone number has been removed`,
                ephemeral: true,
            });
        } else if (interaction.options.getSubcommand() === 'add-contact') {
            Phone.find(
                { discordId: `${interaction.member?.user.id}` },
                'contacts',
                async (err, phone) => {
                    if (err) console.log(err);
                    const newContact = {
                        name: interaction.options.getString('name'),
                        number: interaction.options.getString('number'),
                    };
                    //@ts-ignore
                    phone[0].contacts.push(newContact);
                    await phone[0].save();
                    await interaction.reply({
                        content: `Contact added!`,
                        ephemeral: true,
                    });
                }
            );
        } else if (interaction.options.getSubcommand() === 'remove-contact') {
            Phone.find(
                { discordId: `${interaction.member?.user.id}` },
                'contacts',
                async (err, phone) => {
                    if (err) console.log(err);
                    const contact = phone[0].contacts.find(
                        (contact) =>
                        //@ts-ignore
                            contact.number ===
                            interaction.options.getString('number')
                    );
                    phone[0].contacts.splice(
                        //@ts-ignore
                        phone[0].contacts.indexOf(contact),
                        1
                    );
                    await phone[0].save();
                    await interaction.reply({
                        content: `Contact removed!`,
                        ephemeral: true,
                    });
                }
            );
        } else if (interaction.options.getSubcommand() === 'list-contacts') {
            Phone.find(
                { discordId: `${interaction.member?.user.id}` },
                'contacts',
                async (err, phone) => {
                    if (err) console.log(err);
                    let contacts = '';
                    if (phone[0].contacts.length > 0) {
                        phone[0].contacts.forEach((contact) => {
                            contacts += `${contact.name}: ${contact.number}\n`;
                        });
                        await interaction.reply({
                            content: `${contacts}`,
                            ephemeral: true,
                        });
                    } else {
                        await interaction.reply({
                            content: `You have no contacts!`,
                            ephemeral: true,
                        });
                    }
                }
            );
        }
    },
};
