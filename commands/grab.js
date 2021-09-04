const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('grab')
		.setDescription('Grabs a user by force'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
