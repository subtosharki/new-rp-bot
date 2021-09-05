const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hitch')
		.setDescription('Hitch your horse'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
