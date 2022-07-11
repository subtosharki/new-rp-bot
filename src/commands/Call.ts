import type { CommandInteraction } from 'discord.js';
import { bold, channelMention, SlashCommandBuilder } from '@discordjs/builders';
import { Calling, Declined } from '../components/embeds/Call';
import * as CallButtons from '../components/buttons/Call';

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
        if (!interaction.member?.voice.channelId) {
            return await interaction.reply({
                content:
                    'Please join a voice channel before using this command.',
                ephemeral: true,
            });
        }
        //@ts-ignore
        if (!interaction.options.getMember('user').voice.channelId) {
            return await interaction.reply({
                content:
                    'Both users must be in a voice channel before using this command.',
                ephemeral: true,
            });
        }
        if (
            interaction.options.getMember('user') === interaction.member ||
            //@ts-ignore
            interaction.options.getMember('user')?.id === '881241382184972351'
        ) {
            return await interaction.reply({
                embeds: [Declined],
                ephemeral: true,
            });
        }

        await interaction.reply({
            embeds: [
                Calling.setDescription(
                    `<a:telephone:858107183308603393> ${bold(
                        interaction.options.getMember(
                            'user'
                        ) as unknown as string
                    )} you are getting a call from ${bold(
                        interaction.member as unknown as string
                    )} in ${channelMention(
                        //@ts-ignore
                        interaction.member?.voice.channelId
                    )}\nPress ${bold('Accept')} to join`
                ),
            ],
            components: [CallButtons.default],
        });
        const collector = interaction.channel?.createMessageComponentCollector({
            componentType: 'BUTTON',
            time: 15000,
        });

        collector?.on('collect', (i) => {
            if (i.customId === 'accept') {
                //@ts-ignore
                if(i.user.id === interaction.options.getMember('user')?.id) {
                //@ts-ignore
                interaction.options.getMember('user').voice.setChannel(
                    //@ts-ignore
                    interaction.member?.voice.channel
                )
                } else {
                    interaction.followUp({content: 'You cannot accept this call.', ephemeral: true});
                }
            } else {
                if (
                    i.user.id ===
                    //@ts-ignore
                    (interaction.options.getMember('user')?.id)
                ) {
                    //@ts-ignore
                    interaction.editReply({ embeds: [Declined] });
                } else {
                    interaction.followUp({content: 'You cannot decline this call.', ephemeral: true});
                }
            }
        });

        collector?.on('end', (collected) => {
            if (collected.size === 0) {
                //@ts-ignore
                interaction.editReply({ embeds: [Declined] });
            }
        });
    },
};
