const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('los-santos-customs')
		.setDescription('Sends a Los Santos Customs message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
