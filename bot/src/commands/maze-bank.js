const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('maze-bank')
		.setDescription('Sends a maze bank message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
