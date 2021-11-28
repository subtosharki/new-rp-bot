import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders'

export = {
	data: new SlashCommandBuilder()
		.setName('lock-car')
		.setDescription('Locks your vehicle'),
	async execute(interaction: { reply: (arg0: string) => any; }) {
		await interaction.reply('');
	},
};