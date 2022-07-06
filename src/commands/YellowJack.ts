import type { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('yellow-jack')
        .setDescription('Sends a yellowjack message')
        .setDMPermission(false),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('');
    },
};
