const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fleeca-bank')
		.setDescription('Sends a Fleeca Bank message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
