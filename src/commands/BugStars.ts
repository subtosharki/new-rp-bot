import { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { BugStars } from '../templates/Embeds';

export = {
    data: new SlashCommandBuilder()
        .setName('bug-stars')
        .setDescription('Sends a BugStars message')
        .addStringOption((option) =>
            option
                .setName('status')
                .setDescription('Choose if BugStars is opened or closed')
                .setRequired(true)
                .addChoice('Open', 'Open')
                .addChoice('Closed', 'Closed')
        ),
    async execute(interaction: CommandInteraction) {
        const status: string | null = interaction.options.getString('status');
        await interaction.reply({
            embeds: [BugStars.setDescription(`BugStars is now **${status}**!`)],
        });
    },
};
