const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('vitals')
		.setDescription('Check someones vitals')
		.addUserOption((option) =>
			option
				.setName('user')
				.setDescription('The user who your going to check')
				.setRequired(true)
		),
	async execute(interaction) {
		await interaction.reply('');
	},
};
