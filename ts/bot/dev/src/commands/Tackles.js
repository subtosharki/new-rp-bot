const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tackles')
		.setDescription('Tackles a member to the ground')
		.addUserOption((option) =>
			option
				.setName('user')
				.setDescription('The user to tackle')
				.setRequired(true)
		),
	async execute(interaction) {
		await interaction.reply('');
	},
};
