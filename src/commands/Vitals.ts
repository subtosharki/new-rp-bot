import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders'

export = {
	data: new SlashCommandBuilder()
		.setName('vitals')
		.setDescription('Check someones vitals')
		.addUserOption((option) =>
			option
				.setName('user')
				.setDescription('The user who your going to check')
				.setRequired(true)
		),
	async execute(interaction: { reply: (arg0: string) => any; }) {
		await interaction.reply('');
	},
};
