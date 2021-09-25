const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rons-gas')
		.setDescription('Sends a ron gas station message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
