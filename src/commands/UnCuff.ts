import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders'

export = {
	data: new SlashCommandBuilder()
		.setName('un-cuff')
		.setDescription('Removes handcuffs from a user')
		.addUserOption((option) =>
			option
				.setName('user')
				.setDescription('The user to cuff')
				.setRequired(true)
		),
	async execute(interaction: { reply: (arg0: string) => any; }) {
		await interaction.reply('');
	},
};
