const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('read-id')
		.setDescription("Reads a civilian's ID")
		.addUserOption((option) =>
			option
				.setName('user')
				.setDescription('The users id to read')
				.setRequired(true)
		),
	async execute(interaction) {
		await interaction.reply('');
	},
};
