const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('drink')
		.setDescription('Drink an item'),
	async execute(interaction) {
		await interaction.reply('');
	},
};