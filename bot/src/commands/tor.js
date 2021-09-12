const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tor')
		.setDescription('Sends a tor message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
