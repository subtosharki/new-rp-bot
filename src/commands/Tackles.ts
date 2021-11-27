import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders'

export = {
	data: new SlashCommandBuilder()
		.setName('tackles')
		.setDescription('Tackles a member to the ground')
		.addUserOption((option) =>
			option
				.setName('user')
				.setDescription('The user to tackle')
				.setRequired(true)
		),
	async execute(interaction: { reply: (arg0: string) => any; }) {
		await interaction.reply('');
	},
};
