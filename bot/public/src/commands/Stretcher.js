const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stretcher')
		.setDescription('Put the mentioned user on a stretcher'),

	async execute(interaction) {
		await interaction.reply('');
	},
};
