import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders'

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cab')
        .setDescription('Sends a Downtown Cab Co. message'),
    async execute(interaction: { reply: (arg0: string) => any; }) {
        await interaction.reply('');
    },
};
