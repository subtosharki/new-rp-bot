const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pin-down')
		.setDescription('Pins a user down to the ground')
		.addUserOption((option) =>
			option
				.setName('user')
				.setDescription('The user to pindown')
				.setRequired(true)
		),
	async execute(interaction) {
		await interaction.reply('');
	},
};
