const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cuff')
		.setDescription('Applies handcuffs to a user')
		.addUserOption((option) =>
			option
				.setName('user')
				.setDescription('The user to cuff')
				.setRequired(true)
		),
	async execute(interaction) {
		await interaction.reply('');
	},
};
