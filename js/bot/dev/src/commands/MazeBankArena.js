const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('maze-bank-arena')
		.setDescription('Sends a Maze Bank Arena message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
