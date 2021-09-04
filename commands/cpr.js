const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cpr')
		.setDescription('Conducts CPR on the mentioned user'),
	async execute(interaction) {
		await interaction.reply('');
	},
};