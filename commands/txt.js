const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('txt')
		.setDescription('Texts the mentioned user')
		.addUserOption((option) =>
			option
				.setName('user')
				.setDescription('The user to text')
				.setRequired(true)
		),
	async execute(interaction) {
		await interaction.reply('');
	},
};
