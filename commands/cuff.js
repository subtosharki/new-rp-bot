const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cuff')
		.setDescription('Applies handcuffs to a user'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
