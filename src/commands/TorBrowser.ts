import { CommandInteraction, MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('tor-browser')
        .setDescription('Sends a tor message'),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('');
    },
};
