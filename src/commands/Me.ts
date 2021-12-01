import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('me')
        .setDescription('Do a custom action'),
    async execute(interaction: { reply: (arg0: string) => any }) {
        await interaction.reply('');
    },
};
