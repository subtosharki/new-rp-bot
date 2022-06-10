import { CommandInteraction, MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('un-lock')
        .setDescription('Unlocks your vehicle'),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('');
    },
};
