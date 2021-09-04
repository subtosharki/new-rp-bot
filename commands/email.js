const { SlashCommandBuilder } = require('@discordjs/builders');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('email')
		.setDescription('Emails the mentioned user'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
