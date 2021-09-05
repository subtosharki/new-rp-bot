const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ls-air')
		.setDescription('Sends a los santos air message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
