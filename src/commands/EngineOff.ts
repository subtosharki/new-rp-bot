import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('engine-off')
        .setDescription('Turn off your vehicle engine'),
    async execute(interaction: { reply: (arg0: string) => any }) {
        await interaction.reply('');
    },
};
