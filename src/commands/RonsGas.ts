import { CommandInteraction, MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('rons-gas')
        .setDescription('Sends a ron gas station message'),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('');
    },
};
