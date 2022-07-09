import type { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import Tor from '../components/embeds/Tor';

export = {
    data: new SlashCommandBuilder()
        .setName('tor')
        .setDescription('Sends a tor message')
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
            Tor.setImage(
                `${interaction.options.getAttachment('image')?.proxyURL}`
            );
        await interaction.channel?.send({
            embeds: [
                Tor.setDescription(
                    `${interaction.options.getString('content')}`
                ),
            ],
        });
        await interaction.reply({ content: 'Sent!', ephemeral: true });
    },
};
