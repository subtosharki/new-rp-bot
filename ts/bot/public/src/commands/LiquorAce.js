const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('liquor-ace')
		.setDescription('Sends a LiquorAce message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};