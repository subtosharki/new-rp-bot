import type { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import Email from '../models/Email';
import Gmail from '../components/embeds/Gmail';

export = {
    data: new SlashCommandBuilder()
        .setName('email')
        .setDescription('Emails the mentioned user')
        .setDMPermission(false)
        .addSubcommand((subcommand) =>
            subcommand
                .setName('send')
                .setDescription('Send an email')
                .addStringOption((option) =>
                    option
                        .setName('to')
                        .setDescription('The email you want to send to')
                        .setRequired(true)
                )
                .addStringOption((option) =>
                    option
                        .setName('content')
                        .setDescription('What you want to email')
                        .setRequired(true)
                )
                .addAttachmentOption((option) =>
                    option
                        .setName('image')
                        .setDescription('Add an image')
                        .setRequired(false)
                )
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName('set-email')
                .setDescription('Set your email')
                .addStringOption((option) =>
                    option
                        .setName('email')
                        .setDescription('The email you want')
                        .setRequired(true)
                )
        ),

    async execute(interaction: CommandInteraction) {
        if (interaction.options.getSubcommand() === 'send') {
            Email.find(
                { email: `${interaction.options.getString('to')}` },
                'discordId email',
                async (err, email) => {
                    if (err) console.log(err);
                    Gmail.setDescription(
                        `${interaction.options.getString('content')}`
                    );
                    //@ts-ignore
                    Email.find({ discordId: `${interaction.member?.id}` }, 'email', async (err, email) => {
                        if (err) console.log(err);
                        Gmail.setAuthor(`${email[0].email}`);
                    })
                    if (interaction.options.getAttachment('image')) {
                        Gmail.setImage(
                            `${
                                interaction.options.getAttachment('image')
                                    ?.proxyURL
                            }`
                        );
                    }
                    await interaction.client.users.cache
                        .get(email[0].discordId)
                        ?.send({
                            embeds: [
                                Gmail.setDescription(
                                    `${interaction.options.getString(
                                        'content'
                                    )}`
                                ),
                            ],
                        });
                    await interaction.reply({
                        content: 'Sent!',
                        ephemeral: true,
                    });
                }
            );
        } else {
            const validateEmail = (email: any): boolean => {
                var re = /\S+@\S+\.\S+/;
                return re.test(email);
            };
            if (validateEmail(interaction.options.getString('email'))) {
                Email.findOneAndRemove(
                    { discordId: `${interaction.member?.user.id}` },
                    null,
                    async (err) => {
                        if (err) console.log(err);
                        const profile = new Email({
                            discordId: `${interaction.member?.user.id}`,
                            email: interaction.options.getString('email'),
                        });
                        profile.save((err) => {
                            if (err) console.log(err);
                        });
                        await interaction.reply({
                            content: 'Email Set!',
                            ephemeral: true,
                        });
                    }
                );
            } else {
                await interaction.reply({
                    content: 'Invalid Email',
                    ephemeral: true,
                });
            }
        }
    },
};
