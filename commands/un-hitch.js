const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('un-hitch')
		.setDescription('un-hitches your horse'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
