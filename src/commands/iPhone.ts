import type { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import Phone from '../models/Phone';
import Text from '../components/embeds/Text';
//@ts-ignore
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
                        .setName('new')
                        .setDescription('Get a new phone number')
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('remove')
                        .setDescription('Remove your phone number')
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('get')
                        .setDescription('Get your current phone number')
                )
        )
        .addSubcommandGroup((subcommandGroup) =>
            subcommandGroup
                .setName('contacts')
                .setDescription('Contacts Commands')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('add')
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
                        .setName('remove')
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
                        .setName('list')
                        .setDescription('List your contacts')
                )
        ),

    async execute(interaction: CommandInteraction) {
        if (interaction.options.getSubcommand() === 'text') {
            Phone.findOne(
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
                    if (phone?.number)
                        Text.setAuthor({ name: `${phone!.number}` });
                    if (phone!.contacts.length > 0) {
                        phone!.contacts.forEach((contact) => {
                            if (
                                //@ts-ignore
                                contact.number ===
                                interaction.options.getString('number')
                            ) {
                                //@ts-ignore
                                Text.setAuthor({
                                    name: contact.name,
                                });
                            }
                        });
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
                        .get(phone!.discordId)
                        ?.send({ embeds: [Text] });
                    await interaction.reply({
                        content: 'Text Sent!',
                        ephemeral: true,
                    });
                }
            );
        } else if (interaction.options.getSubcommand() === 'new-number') {
            Phone.findOne(
                //@ts-ignore
                { discordId: `${interaction.member?.id}` },
                'number',
                async (err, phone) => {
                    if (phone) {
                        await interaction.reply({
                            content: 'You already have a phone number!',
                            ephemeral: true,
                        });
                    } else {
                        if (err) console.log(err);
                        const number = createMobilePhoneNumber('USA');
                        const newPhone = new Phone({
                            //@ts-ignore
                            discordId: `${interaction.member?.id}`,
                            number: `${number}`,
                        });
                        newPhone.save();
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
            Phone.findOne(
                { discordId: `${interaction.member?.user.id}` },
                'contacts',
                async (err, phone) => {
                    if (err) console.log(err);
                    const newContact = {
                        name: interaction.options.getString('name'),
                        number: interaction.options.getString('number'),
                    };
                    //@ts-ignore
                    phone.contacts.push(newContact);
                    await phone!.save();
                    await interaction.reply({
                        content: `Contact added!`,
                        ephemeral: true,
                    });
                }
            );
        } else if (interaction.options.getSubcommand() === 'remove-contact') {
            Phone.findOne(
                { discordId: `${interaction.member?.user.id}` },
                'contacts',
                async (err, phone) => {
                    if (err) console.log(err);
                    const contact = phone!.contacts.find(
                        (contact) =>
                            //@ts-ignore
                            contact.number ===
                            interaction.options.getString('number')
                    );
                    phone!.contacts.splice(
                        //@ts-ignore
                        phone.contacts.indexOf(contact)
                    );
                    await phone!.save();
                    await interaction.reply({
                        content: `Contact removed!`,
                        ephemeral: true,
                    });
                }
            );
        } else if (interaction.options.getSubcommand() === 'list-contacts') {
            Phone.findOne(
                { discordId: `${interaction.member?.user.id}` },
                'contacts',
                async (err, phone) => {
                    if (err) console.log(err);
                    let contacts = '';
                    if (phone!.contacts.length > 0) {
                        phone!.contacts.forEach((contact) => {
                            contacts += `${contact.name}: ${contact.number}\n`;
                        });
                        await interaction.reply({
                            embeds: [
                                {
                                    title: 'Contacts',
                                    description: `${contacts}`,
                                },
                            ],
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
        } else if (interaction.options.getSubcommand() === 'get-number') {
            Phone.findOne(
                { discordId: `${interaction.member?.user.id}` },
                'number',
                async (err, phone) => {
                    if (err) console.log(err);
                    await interaction.reply({
                        content: `Your phone number is ${phone!.number}`,
                        ephemeral: true,
                    });
                }
            );
        }
    },
};
