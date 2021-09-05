const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('atomic')
		.setDescription('Sends a atomic message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
