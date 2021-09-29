const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('engine-on')
		.setDescription('Turn on your vehicle engine'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
