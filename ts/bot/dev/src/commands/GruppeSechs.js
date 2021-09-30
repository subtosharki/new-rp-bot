const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gruppe-sechs')
		.setDescription('Sends a GruppeSechs message'),
	async execute(interaction) {
		await interaction.reply('');
	},
};
