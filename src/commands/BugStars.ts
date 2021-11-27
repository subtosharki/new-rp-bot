import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders'

export = {
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
	async execute(interaction: { options: { getString: (arg0: string) => any; }; reply: (arg0: { embeds: MessageEmbed[]; }) => any; }) {
		const status:string = interaction.options.getString('status');
		const embed:any = new MessageEmbed()
			.setColor('#1e4278')
			.setTitle('BugStars')
			.setThumbnail('https://i.file.glass/21edi.png')
			.setTimestamp()
			.setDescription(`BugStars is now **${status}**!`);

		await interaction.reply({ embeds: [embed] });
	},
};
