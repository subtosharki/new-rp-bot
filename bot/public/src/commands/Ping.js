const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Share your location with another user')
		.addUserOption((option) =>
			option
				.setName('user')
				.setDescription('The user you are sharing your location with')
				.setRequired(true)
		),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
