const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { Client } = require('unb-api');
const client = new Client(process.env.UNB_TOKEN);
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bal')
		.setDescription('Checks the users unbelievaboat balance')
		.addUserOption((option) =>
			option.setName('user').setDescription('Users balance to check')
		),
	async execute(interaction) {
		const guildID = interaction.member.guild.id;

		if (!interaction.options.getUser('user'))
			var userID = interaction.member.id;
		else {
			var userID = interaction.options.getUser('user').id;
		}

		if (!interaction.options.getUser('user'))
			var author = interaction.member.user.tag;
		else {
			var author = interaction.options.getUser('user').tag;
		}

		if (!interaction.options.getUser('user'))
			var avatar = interaction.member.user.avatar;
		else {
			var avatar = interaction.options.getUser('user').avatar;
		}
		var guild = client.getGuild(guildID);
		var bal = client.getUserBalance(guildID, userID);
		var board = client.getGuildLeaderboard(guildID);
		const Embed = new MessageEmbed()
			.setColor('#03A8F4')
			.setDescription(`Leaderboard Rank: ${(await board).rank}`)
			.setAuthor(
				`${author}`,
				`https://cdn.discordapp.com/avatars/${userID}/${avatar}.webp?size=256`
			)
			.addFields(
				{
					name: 'Cash: ',
					value: `${(await guild).currencySymbol} ${(await bal).cash}`,
					inline: true,
				},
				{
					name: 'Bank: ',
					value: `${(await guild).currencySymbol} ${(await bal).bank}`,
					inline: true,
				},
				{
					name: 'Total: ',
					value: `${(await guild).currencySymbol} ${(await bal).total}`,
					inline: true,
				}
			)
			.setTimestamp();

		interaction.reply({ embeds: [Embed] });
	},
};
