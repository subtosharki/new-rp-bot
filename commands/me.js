const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('me')
		.setDescription('Do a custom action'),
	async execute(interaction) {
		await interaction.reply('');
	},
};