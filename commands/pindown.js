const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pindown')
		.setDescription('Pins a user down to the ground'),
	async execute(interaction) {
		await interaction.reply('');
	},
};