const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('life')
		.setDescription('Sends a life invader message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
