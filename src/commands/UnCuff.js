const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('un-cuff')
		.setDescription('Removes handcuffs from a user')
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
