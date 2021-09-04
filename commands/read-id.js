const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('read-id')
		.setDescription("Reads a civilian's ID"),
	async execute(interaction) {
		await interaction.reply('');
	},
};
