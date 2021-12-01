import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('tweet')
        .setDescription('Sends a twitter like message'),
    async execute(interaction: { reply: (arg0: string) => any }) {
        await interaction.reply('');
    },
};
