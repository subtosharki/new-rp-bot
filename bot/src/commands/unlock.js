const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('un-lock')
		.setDescription('Unlocks your vehicle'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
