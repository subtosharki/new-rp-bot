import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders'

export = {
	data: new SlashCommandBuilder()
		.setName('ammunation')
		.setDescription('Sends a ammu-nation message')
		.addStringOption((option) =>
			option
				.setName('location')
				.setDescription('Location of the Ammu-nation')
				.setRequired(true)
				.addChoice(
					"Adam's Apple Boulevard and Elgin Avenue in Downtown Los Santos",
					"Adam's Apple Boulevard and Elgin Avenue in Downtown Los Santos"
				)
				.addChoice(
					'Lindsay Circus and Palomino Avenue in Little Seoul',
					'Lindsay Circus and Palomino Avenue in Little Seoul'
				)
				.addChoice(
					'Popular Street in Cypress Flats, East Los Santos',
					'Popular Street in Cypress Flats, East Los Santos'
				)
				.addChoice(
					'Tataviam Truckstop, in the Tataviam Mountains',
					'Tataviam Truckstop, in the Tataviam Mountains'
				)
				.addChoice('Paleto Bay', 'Paleto Bay')
				.addChoice(
					'Algonquin Boulevard, Sandy Shores',
					'Algonquin Boulevard, Sandy Shores'
				)
				.addChoice(
					'Boulevard Del Perro, Morningwood',
					'Boulevard Del Perro, Morningwood'
				)
				.addChoice(
					'Vinewood Plaza, Spanish Avenue, Hawick',
					'Vinewood Plaza, Spanish Avenue, Hawick'
				)
				.addChoice(
					'325 Vespucci Boulevard in Mission Row',
					'325 Vespucci Boulevard in Mission Row'
				)
				.addChoice(
					'Chumash Plaza, Great Ocean Highway, Chumash',
					'Chumash Plaza, Great Ocean Highway, Chumash'
				)
		)
		.addStringOption((option) =>
			option
				.setName('status')
				.setDescription('Choose if the AmmuNation is opened or closed')
				.setRequired(true)
				.addChoice('Open', 'Open')
				.addChoice('Closed', 'Closed')
		),
	async execute(interaction: { options: { getString: (arg0: string) => any; }; reply: (arg0: { embeds: MessageEmbed[]; }) => any; }) {
		const location:string = interaction.options.getString('location');
		const status:string = interaction.options.getString('status');
		const embed:any = new MessageEmbed()
			.setColor('#840204')
			.setTitle('AmmuNation')
			.setThumbnail('https://i.file.glass/d8j0i.jpg')
			.setTimestamp()
			.setDescription(
				`The AmmuNation in **${location}** is now **${status}**!`
			);

		await interaction.reply({ embeds: [embed] });
	},
};
