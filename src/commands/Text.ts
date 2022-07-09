import type { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import Phone from '../models/Phone';
import { Text } from '../components/Embeds';
import createMobilePhoneNumber from 'random-mobile-numbers';

export = {
    data: new SlashCommandBuilder()
        .setName('iphone')
        .setDescription('Texts the mentioned user')
        .setDMPermission(false)
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
                .setName('get-number')
                .setDescription('Get a new phone number')
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName('remove-number')
                .setDescription('Remove your phone number')
        ),
    async execute(interaction: CommandInteraction) {
        if (interaction.options.getSubcommand() === 'text') {
            Phone.find(
                { number: `${interaction.options.getString('number')}` },
                'discordId number',
                async (err, phone) => {
                    if (err) console.log(err);
                    Text.setDescription(
                        `${interaction.options.getString('text')}`
                    );
                    Text.setAuthor({
                        name: phone[0].number || 'Unknown Number',
                    });
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
        } else if (interaction.options.getSubcommand() === 'get-number') {
            Phone.findOneAndRemove(
                { discordId: `${interaction.member?.user.id}` },
                null,
                (err) => {
                    if (err) console.log(err);
                }
            );
            const number = new Phone({
                number: createMobilePhoneNumber('USA'),
                discordId: interaction.member?.user.id,
            });
            number.save(async (err) => {
                if (err) console.log(err);
                await interaction.reply({
                    content: `Your new phone number is ${number.number}`,
                    ephemeral: true,
                });
            });
        } else {
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
        }
    },
};
