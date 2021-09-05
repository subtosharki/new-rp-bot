const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dynasty')
		.setDescription('Sends a dynasty 8 message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
