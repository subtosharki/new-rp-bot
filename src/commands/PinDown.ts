import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders'

export = {
	data: new SlashCommandBuilder()
		.setName('pin-down')
		.setDescription('Pins a user down to the ground')
		.addUserOption((option) =>
			option
				.setName('user')
				.setDescription('The user to pindown')
				.setRequired(true)
		),
	async execute(interaction: { reply: (arg0: string) => any; }) {
		await interaction.reply('');
	},
};
