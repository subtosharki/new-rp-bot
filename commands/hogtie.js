const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hogtie')
		.setDescription('Hogties someone')
		.addUserOption((option) =>
			option
				.setName('user')
				.setDescription('The user to hogtie')
				.setRequired(true)
		),
	async execute(interaction) {
		await interaction.reply('');
	},
};
