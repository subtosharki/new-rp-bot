const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('air-emu')
		.setDescription('Sends a air emu message')
		.addStringOption((option) =>
			option
				.setName('status')
				.setDescription('The status of your plane')
				.setRequired(true)
				.addChoice('Taking Off', 'Taking Off')
				.addChoice('Boarding', 'Boarding')
				.addChoice('Landing', 'Landing')
		)
		.addNumberOption((option) =>
			option
				.setName('flight-number')
				.setDescription('The flight number of your plane')
				.setRequired(true)
		)
		.addStringOption((option) =>
			option
				.setName('location')
				.setDescription('The location of the plane')
				.setRequired(true)
				.addChoice(
					'Los Santos International Airport',
					'Los Santos International Airport'
				)
				.addChoice('McKenzie Airfield', 'McKenzie Airfield')
				.addChoice('Sandy Shores Airfield', 'Sandy Shores Airfield')
				.addChoice('Fort Zancudo Military Base', 'Fort Zancudo Military Base')
		),
	async execute(interaction) {
		const location = interaction.options.getString('location');
		const status = interaction.options.getString('status');
		const number = interaction.options.getNumber('flight-number');
		const embed = new MessageEmbed()
			.setColor('#dba31e')
			.setTitle('Air-Emu')
			.setThumbnail('https://i.file.glass/heh5h.png')
			.setTimestamp()
			.setDescription(
				`Flight Number **${number}** in **${location}** is now **${status}**!`
			);

		await interaction.reply({ embeds: [embed] });
	},
};
