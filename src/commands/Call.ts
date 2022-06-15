import { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { Calling, Declined } from '../templates/Embeds';
import { CallButtons } from '../templates/Buttons';

export = {
    data: new SlashCommandBuilder()
        .setName('call')
        .setDescription(
            'Calls a user and shows your voice chat for them to join.'
        )
        .setDMPermission(false)
        .addUserOption((option) =>
            option
                .setName('user')
                .setDescription('User to call')
                .setRequired(true)
        ),

    async execute(interaction: CommandInteraction) {
        //@ts-ignore
        const voiceChannel: string | null = interaction.member?.voice.channelId;

        if (!voiceChannel) {
            return interaction.reply({
                content:
                    'Please join a voice channel before using this command.',
                ephemeral: true,
            });
        }
        if (interaction.options.getMember('user') === interaction.member) {
            return interaction.reply({
                embeds: [Declined],
                ephemeral: true,
            });
        }

        await interaction.reply({
            embeds: [
                Calling.setDescription(
                    `<a:telephone:858107183308603393> **${interaction.options.getMember(
                        'user'
                    )}** you are getting a call from **${
                        interaction.member
                    }** in <#${
                        //@ts-ignore
                        interaction.member?.voice.channelId
                    }>\nPress **Accept** to join`
                ),
            ],
            components: [CallButtons],
        });
    },
};
