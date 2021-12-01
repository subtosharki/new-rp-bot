import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import commands from '..';

export = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Shows a list of commands'),
    async execute(interaction: { reply: (arg0: string) => any }) {
        await interaction.reply(commands);
    },
};
