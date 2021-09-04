const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tow')
		.setDescription('Tows the mentioned users vehicle'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
