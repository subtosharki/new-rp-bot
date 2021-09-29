const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('xero-gas')
		.setDescription('Sends a xero gas station message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
