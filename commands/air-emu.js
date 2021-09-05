const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('air-emu')
		.setDescription('Sends a air emu message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
