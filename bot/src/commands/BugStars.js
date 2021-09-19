const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bug-stars')
		.setDescription('Sends a BugStars message')
		.addStringOption((option) =>
			option
				.setName('status')
				.setDescription('Choose if BugStars is opened or closed')
				.setRequired(true)
				.addChoice('Open', 'Open')
				.addChoice('Closed', 'Closed')
		),
	async execute(interaction) {
		const status = interaction.options.getString('status');
		const embed = new MessageEmbed()
			.setColor('#1e4278')
			.setTitle('BugStars')
			.setThumbnail('https://i.file.glass/21edi.png')
			.setTimestamp()
			.setDescription(`BugStars is now **${status}**!`);

		await interaction.reply({ embeds: [embed] });
	},
};
