const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lsdpw')
		.setDescription('Sends a los santos department of power and water message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
