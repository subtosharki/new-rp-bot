const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fly-us')
		.setDescription('Sends a fly-us message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
