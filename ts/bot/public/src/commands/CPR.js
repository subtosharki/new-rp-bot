const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cpr')
		.setDescription('Conducts CPR on the mentioned user')
		.addUserOption((option) =>
			option
				.setName('user')
				.setDescription('The user who you are going to perform CPR on')
				.setRequired(true)
		),
	async execute(interaction) {
		await interaction.reply('');
	},
};
