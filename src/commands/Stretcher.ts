import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('stretcher')
        .setDescription('Put the mentioned user on a stretcher'),

    async execute(interaction: { reply: (arg0: string) => any }) {
        await interaction.reply('');
    },
};
