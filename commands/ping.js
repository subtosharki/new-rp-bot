const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Share your location with another user'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
