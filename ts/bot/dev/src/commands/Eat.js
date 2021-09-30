const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('eat')
		.setDescription('Eat an item'),
	async execute(interaction) {
		await interaction.reply('');
	},
};