const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('post-op')
		.setDescription('Sends a PostOp message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
