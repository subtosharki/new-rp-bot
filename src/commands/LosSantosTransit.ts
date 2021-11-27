import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders'

export = {
	data: new SlashCommandBuilder()
		.setName('los-santos-transit')
		.setDescription('Sends a Los Santos Transit message'),
	async execute(interaction: { reply: (arg0: string) => any; }) {
		await interaction.reply('');
	},
};
