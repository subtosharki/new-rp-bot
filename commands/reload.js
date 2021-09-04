const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reload')
		.setDescription('Reloads your weapon'),
	async execute(interaction) {
		await interaction.reply('');
	},
};