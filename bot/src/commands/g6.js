const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('g6')
		.setDescription('Sends a gruppe sechs message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
