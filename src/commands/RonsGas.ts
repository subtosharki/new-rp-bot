import type { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('rons-gas')
        .setDescription('Sends a ron gas station message')
        .setDMPermission(false),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('');
    },
};
