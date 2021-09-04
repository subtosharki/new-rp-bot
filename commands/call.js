const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('call')
		.setDescription('Calls a user and shows your voice chat for them to join.'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
