import { MessageActionRow, MessageButton, MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { joinVoiceChannel } from '@discordjs/voice';

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

    async execute(interaction: {
        member: { voice: { channelId: string }; id: string };
        reply: (arg0: {
            content?: string;
            ephemeral?: boolean;
            embeds?: any[];
            components?: any[];
        }) => any;
        options: {
            getMember: (arg0: string) => {
                (): any;
                new (): any;
                id: any;
                voice: { (): any; new (): any; channelId: any };
            };
        };
        guild: { id: any; voiceAdapterCreator: any };
        channel: {
            createMessageComponentCollector: (arg0: {
                filter: (i: {
                    customId: string;
                    user: { id: string };
                }) => boolean;
                time: number;
            }) => any;
        };
    }) {
        const voiceChannel: string = interaction.member.voice.channelId;

        const declined: any = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Call Failed')
            .setTimestamp();

        const accepted: any = new MessageEmbed()
            .setColor('#3BA55C')
            .setTitle('Call Accepted')
            .setTimestamp();

        if (!voiceChannel) {
            return interaction.reply({
                content:
                    'Please join a voice channel before using this command.',
                ephemeral: true,
            });
        }
        if (interaction.options.getMember('user') === interaction.member) {
            return interaction.reply({
                embeds: [declined],
                ephemeral: true,
            });
        }

        const connection = joinVoiceChannel({
            channelId: interaction.options.getMember('user').voice.channelId,
            guildId: interaction.guild.id,
            adapterCreator: interaction.guild.voiceAdapterCreator,
        });

        const button: any = new MessageActionRow().addComponents(
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
        const calling: any = new MessageEmbed()
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

        await interaction.reply({ embeds: [calling], components: [button] });

        let filter = (i: { customId: string; user: { id: string } }) =>
            i.customId === 'accept' && i.user.id === interaction.member.id;

        const collector = interaction.channel.createMessageComponentCollector({
            filter,
            time: 15000,
        });

        filter = (i: { customId: string; user: { id: string } }) =>
            i.customId === 'decline' && i.user.id === interaction.member.id;

        const collector2 = interaction.channel.createMessageComponentCollector({
            filter,
            time: 15000,
        });

        collector.on(
            'collect',
            async (i: {
                customId: string;
                update: (arg0: {
                    components: any[];
                    embeds: any[];
                    ephemeral: boolean;
                }) => any;
            }) => {
                if (i.customId === 'accept') {
                    await i.update({
                        components: [],
                        embeds: [accepted],
                        ephemeral: true,
                    });
                }
            }
        );

        collector2.on(
            'collect',
            async (f: {
                customId: string;
                update: (arg0: {
                    components: any[];
                    embeds: any[];
                    ephemeral: boolean;
                }) => any;
            }) => {
                if (f.customId === 'decline') {
                    await f.update({
                        components: [],
                        embeds: [declined],
                        ephemeral: true,
                    });
                }
            }
        );

        collector.on(
            'end',
            async (
                collected: { size: number },
                i: {
                    update: (arg0: {
                        compontents: any[];
                        embeds: any[];
                        ephemeral: boolean;
                    }) => any;
                }
            ) => {
                console.log('end');
                if (collected.size === 0) {
                    console.log(true)
                } else {
                    console.log(false);
                }
            }
        );
    },
};
