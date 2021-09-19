const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tweet')
		.setDescription('Sends a twitter like message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
