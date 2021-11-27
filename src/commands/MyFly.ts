import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders'

export = {
	data: new SlashCommandBuilder()
		.setName('myfly')
		.setDescription('Sends a MyFly message')
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
	async execute(interaction: { options: { getString: (arg0: string) => any; getNumber: (arg0: string) => any; }; reply: (arg0: { embeds: MessageEmbed[]; }) => any; }) {
		const location:string = interaction.options.getString('location');
		const status:string = interaction.options.getString('status');
		const number:number = interaction.options.getNumber('flight-number');
		const embed:any = new MessageEmbed()
			.setColor('#8f9193')
			.setTitle('MyFly')
			.setThumbnail('https://i.file.glass/b6dh3.png')
			.setTimestamp()
			.setDescription(
				`MyFly Flight Number **${number}** in **${location}** is now **${status}**!`
			);

		await interaction.reply({ embeds: [embed] });
	},
};