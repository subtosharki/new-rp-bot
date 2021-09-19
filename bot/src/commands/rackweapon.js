const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rack-weapon')
		.setDescription('Racks your weapon'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
