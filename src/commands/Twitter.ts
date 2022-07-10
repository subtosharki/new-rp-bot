import type { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import Tweet from '../components/embeds/Tweet';
import Server, { GetServer } from '../models/Server';
import type { Error } from 'mongoose';
import { GetTwitter } from '../models/Twitter';

export = {
    data: new SlashCommandBuilder()
        .setName('twitter')
        .setDescription('Twitter commands')
        .setDMPermission(false)
        .addSubcommand((subcommand) =>
            subcommand
                .setName('post')
                .setDescription('Post a tweet')
                .addStringOption((option) =>
                    option
                        .setName('content')
                        .setDescription('What you want to tweet')
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
                .setName('set-profile')
                .setDescription('Set your profile')
                .addStringOption((option) =>
                    option
                        .setName('username')
                        .setDescription('Your username you want')
                        .setRequired(true)
                )
                .addAttachmentOption((option) =>
                    option
                        .setName('image')
                        .setDescription('Your profilw picture')
                        .setRequired(false)
                )
        ),

    async execute(interaction: CommandInteraction) {
        if (interaction.options.getSubcommand() === 'post') {
            if (interaction.options.getAttachment('image'))
                Tweet.setImage(
                    `${interaction.options.getAttachment('image')?.proxyURL}`
                );
            if (interaction.options.getAttachment('image'))
                Tweet.setImage(
                    `${interaction.options.getAttachment('image')?.proxyURL}`
                );
            (
                await GetServer(interaction.guild?.id as string)
            ).verifiedUsers.forEach(async (user) => {
                //@ts-ignore
                if (user === interaction.member?.id) {
                    Tweet.setTitle('<:verified:869045206857711657> TWOTTER');
                }
            });

            //still working
            await interaction.channel?.send({
                embeds: [
                    Tweet.setDescription(
                        `${interaction.options.getString('content')}`
                    ).setAuthor({name: `${(await GetTwitter(interaction.guild?.id as string)).username || interaction.member?.user.username}`, iconURL: `${(await GetTwitter(interaction.guild?.id as string)).pfp || interaction.member?.user.avatarURL()}`}),
                ],
            });
            await interaction.reply({ content: 'Sent!', ephemeral: true });
            if (interaction.options.getString('content')?.includes('<@')) {
                interaction.options
                    .getString('content')
                    ?.split(' ')
                    .forEach((val) => {
                        /<@!?(\d+)>/.test(val)
                            ? interaction.channel?.send(`${val}`)
                            : null;
                    });
            }
        } else if (interaction.options.getSubcommand() === 'set-profile') {
        }
    },
};
