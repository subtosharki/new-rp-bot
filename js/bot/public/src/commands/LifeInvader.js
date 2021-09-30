const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('life-invader')
		.setDescription('Sends a LifeInvader message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
