const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tackles')
		.setDescription('Tackles a member to the ground'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
