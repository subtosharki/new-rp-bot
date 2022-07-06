import type { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('los-santos-transit')
        .setDescription('Sends a Los Santos Transit message')
        .setDMPermission(false),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('');
    },
};
