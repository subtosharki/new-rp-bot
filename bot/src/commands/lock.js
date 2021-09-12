const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lock')
		.setDescription('Locks your vehicle'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
