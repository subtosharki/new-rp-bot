import type { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('fleeca-bank')
        .setDescription('Sends a Fleeca Bank message')
        .setDMPermission(false),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('');
    },
};
