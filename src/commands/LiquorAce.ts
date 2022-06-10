import { CommandInteraction, MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('liquor-ace')
        .setDescription('Sends a LiquorAce message'),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('');
    },
};
