const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tow')
		.setDescription('Tows the mentioned users vehicle')
		.addUserOption((option) =>
			option
				.setName('user')
				.setDescription('The user who you are calling tow for')
				.setRequired(true)
		),
	async execute(interaction) {
		await interaction.reply('');
	},
};
