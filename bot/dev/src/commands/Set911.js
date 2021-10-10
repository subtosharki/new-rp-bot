const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('set911')
		.setDescription('Set a 911 role in the server')
		.addRoleOption((option) =>
			option
				.setName('role')
				.setDescription('The 911 role')
				.setRequired(true)
		),
	async execute(interaction) {
		await interaction.reply('');
	},
};
