const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('los-santos-transit')
		.setDescription('Sends a Los Santos Transit message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
