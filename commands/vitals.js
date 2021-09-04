const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('vitals')
		.setDescription('Check someones vitals'),
	async execute(interaction) {
		await interaction.reply('');
	},
};