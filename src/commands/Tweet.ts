import type { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { Tweet } from '../components/Embeds';

export = {
    data: new SlashCommandBuilder()
        .setName('twitter')
        .setDescription('Sends a twitter like message')
        .setDMPermission(false)
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
        ),
    async execute(interaction: CommandInteraction) {
        if (interaction.options.getAttachment('image'))
            Tweet.setImage(
                `${interaction.options.getAttachment('image')?.proxyURL}`
            );
        if (interaction.user.id === '318203855365996544') {
            Tweet.setTitle('<:verified:869045206857711657> TWOTTER');
        }
        await interaction.reply({
            embeds: [
                Tweet.setDescription(
                    `${interaction.options.getString('content')}`
                ).setAuthor({
                    //@ts-ignore
                    name: `${interaction.member?.user.tag}`,
                    //@ts-ignore
                    iconURL: `https://cdn.discordapp.com/avatars/${interaction.member?.id}/${interaction.member?.user.avatar}.webp?size=256`,
                }),
            ],
        });
    },
};
