import type { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('los-santos-customs')
        .setDescription('Sends a Los Santos Customs message')
        .setDMPermission(false),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('');
    },
};
