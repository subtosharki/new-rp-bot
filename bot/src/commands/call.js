const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('call')
		.setDescription('Calls a user and shows your voice chat for them to join.')
		.addUserOption((option) =>
			option.setName('user').setDescription('User to call').setRequired(true)
		),

	async execute(interaction) {
		let voiceChannel = interaction.member.voice.channelId;
		const guildMember = interaction.options.getMember('user');

		if (!voiceChannel) {
			return interaction.reply({
				content: 'Please join a voice channel before using this command.',
				ephemeral: true,
			});
		}
		const button = new MessageActionRow().addComponents(
			new MessageButton()
				.setCustomId('accept')
				.setLabel('Accept')
				.setStyle('SUCCESS')
				.setEmoji('858107173799198740'),

			new MessageButton()
				.setCustomId('decline')
				.setLabel('Decline')
				.setStyle('DANGER')
				.setEmoji('858107161266618369')
		);
		const Embed = new MessageEmbed()
			.setColor('#004cff')
			.setDescription(
				`<a:telephone:858107183308603393> **${guildMember.nickname}** you are getting a call from **${interaction.member.nickname}** in <#${interaction.member.voice.channelId}>\nPress **Accept** to join`
			)
			.setTimestamp();

		await interaction.reply({ embeds: [Embed], components: [button] });
	},
};
