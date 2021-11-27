import { MessageActionRow, MessageButton, MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders'

export = {
    data: new SlashCommandBuilder()
        .setName('call')
        .setDescription(
            'Calls a user and shows your voice chat for them to join.'
        )
        .addUserOption((option) =>
            option
                .setName('user')
                .setDescription('User to call')
                .setRequired(true)
        ),

    async execute(interaction: { member: { voice: { channelId: any; }; }; reply: (arg0: { content?: string; ephemeral?: boolean; embeds?: MessageEmbed[]; components?: MessageActionRow[]; }) => any; options: { getMember: (arg0: string) => any; }; }) {
        const voiceChannel:string = interaction.member.voice.channelId;

        if (!voiceChannel) {
            return interaction.reply({
                content:
                    'Please join a voice channel before using this command.',
                ephemeral: true,
            });
        }
        if (interaction.options.getMember('user') === interaction.member) {
            return interaction.reply({
                content: "You can't call yourself.",
                ephemeral: true,
            });
        }
        const button:any = new MessageActionRow().addComponents(
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
        const embed:any = new MessageEmbed()
            .setColor('#004cff')
            .setDescription(
                `<a:telephone:858107183308603393> **${interaction.options.getMember(
                    'user'
                )}** you are getting a call from **${
                    interaction.member
                }** in <#${
                    interaction.member.voice.channelId
                }>\nPress **Accept** to join`
            )
            .setTimestamp();

        await interaction.reply({ embeds: [embed], components: [button] });
    },
};
