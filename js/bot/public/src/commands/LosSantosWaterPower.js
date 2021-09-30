const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('los-santos-water-power')
		.setDescription('Sends a Los Santos Water and Power message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
