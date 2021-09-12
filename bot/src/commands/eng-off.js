const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('eng-off')
		.setDescription('Turn off your vehicle engine'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
