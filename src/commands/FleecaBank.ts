import { CommandInteraction, MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('fleeca-bank')
        .setDescription('Sends a Fleeca Bank message'),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('');
    },
};
