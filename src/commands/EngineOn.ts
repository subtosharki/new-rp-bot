import { CommandInteraction, MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('engine-on')
        .setDescription('Turn on your vehicle engine'),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('');
    },
};
