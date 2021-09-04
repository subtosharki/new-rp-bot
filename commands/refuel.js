const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('refuel')
		.setDescription('Refuel a vehicle'),
	async execute(interaction) {
		await interaction.reply('');
	},
};