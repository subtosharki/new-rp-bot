const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pulse')
		.setDescription('Checks someones pulse'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
