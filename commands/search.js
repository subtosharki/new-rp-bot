const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('search')
		.setDescription('Search a user'),
	async execute(interaction) {
		await interaction.reply('');
	},
};