const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bug-stars')
		.setDescription('Sends a bug stars message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
