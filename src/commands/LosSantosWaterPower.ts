import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders'

export = {
	data: new SlashCommandBuilder()
		.setName('los-santos-water-power')
		.setDescription('Sends a Los Santos Water and Power message'),
	async execute(interaction: { reply: (arg0: string) => any; }) {
		await interaction.reply('');
	},
};
