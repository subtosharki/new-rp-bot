const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('txt')
		.setDescription('Texts the mentioned user'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
