const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ls-transit')
		.setDescription('Sends a los santos transit message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
