import { CommandInteraction, MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('maze-bank-arena')
        .setDescription('Sends a Maze Bank Arena message'),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('');
    },
};
