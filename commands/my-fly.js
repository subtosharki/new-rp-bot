const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('my-fly')
		.setDescription('Sends a my fly message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
