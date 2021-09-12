const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lsc')
		.setDescription('Sends a los santos custom message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
