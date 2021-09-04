const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('uncuff')
		.setDescription('Removes handcuffs from a user'),
	async execute(interaction) {
		await interaction.reply('');
	},
};