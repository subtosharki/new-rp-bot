const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('search')
		.setDescription('Search a user')
		.addUserOption((option) =>
			option
				.setName('user')
				.setDescription('The user to search')
				.setRequired(true)
		),
	async execute(interaction) {
		await interaction.reply('');
	},
};
