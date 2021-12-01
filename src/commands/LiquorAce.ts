import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('liquor-ace')
        .setDescription('Sends a LiquorAce message'),
    async execute(interaction: { reply: (arg0: string) => any }) {
        await interaction.reply('');
    },
};
