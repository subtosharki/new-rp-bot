const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('yellowjack')
		.setDescription('Sends a yellowjack message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
