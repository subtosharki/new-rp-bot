import { CommandInteraction, MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('rack-weapon')
        .setDescription('Racks your weapon'),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('');
    },
};
