import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders'

export = {
	data: new SlashCommandBuilder()
		.setName('maze-bank')
		.setDescription('Sends a Maze Bank message'),
	async execute(interaction: { reply: (arg0: string) => any; }) {
		await interaction.reply('');
	},
};