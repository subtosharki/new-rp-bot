const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hospitalize')
		.setDescription('Hospitalizes the mentioned user')
		.addUserOption((option) =>
			option
				.setName('user')
				.setDescription('The user who you are going to hospitalize')
				.setRequired(true)
		),
	async execute(interaction) {
		await interaction.reply('');
	},
};
