import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('los-santos-customs')
        .setDescription('Sends a Los Santos Customs message'),
    async execute(interaction: { reply: (arg0: string) => any }) {
        await interaction.reply('');
    },
};
