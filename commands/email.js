const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('email')
		.setDescription('Emails the mentioned user')
		.addUserOption((option) =>
			option
				.setName('user')
				.setDescription('The user you are going to email')
				.setRequired(true)
		),
	async execute(interaction) {
		await interaction.reply('');
	},
};
