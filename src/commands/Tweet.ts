import type { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import Tweet from '../components/embeds/Tweet';
import Profile from '../models/Profile';
import Server from '../models/Server';

export = {
    data: new SlashCommandBuilder()
        .setName('twitter')
        .setDescription('Twitter App Command')
        .setDMPermission(false)
        .addSubcommand((subcommand) =>
            subcommand
                .setName('post')
                .setDescription('Make a twitter post')
                .addStringOption((option) =>
                    option
                        .setName('content')
                        .setDescription('What you want to tweet')
                        .setRequired(true)
                )
                .addAttachmentOption((option) =>
                    option
                        .setName('image')
                        .setDescription('Add an image')
                        .setRequired(false)
                )
        )
        .addSubcommandGroup((subcommandGroup) =>
            subcommandGroup
                .setName('settings')
                .setDescription('Profile Settings')

        .addSubcommand((subcommand) =>
            subcommand
                .setName('set-profile')
                .setDescription('Set your Twitter Profile Details')
                .addStringOption((option) =>
                    option
                        .setName('username')
                        .setDescription(
                            'The username you want to appear on twitter'
                        )
                        .setRequired(false)
                )
                .addAttachmentOption((option) =>
                    option
                        .setName('profile-picture')
                        .setDescription(
                            'The picture you want to appear on twitter'
                        )
                        .setRequired(false)
                )
        )
        ).addSubcommandGroup((subcommandGroup) =>
            subcommandGroup
                .setName('server-settings')
                .setDescription('Server Settings')

        .addSubcommand((subcommand) =>
            subcommand
                .setName('verify-profile')
                .setDescription('Verify a Profile in your server')
                .addUserOption((option) =>
                    option
                        .setName('user')
                        .setDescription('The user you want to verify')
                        .setRequired(true)
                )
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName('unverify-profile')
                .setDescription('Unverify a Profile in your server')
                .addUserOption((option) =>
                    option
                        .setName('user')
                        .setDescription('The user you want to unverify')
                        .setRequired(true)
                )
        )
        ),
    async execute(interaction: CommandInteraction) {
        if (interaction.options.getSubcommand() === 'post') {
            Profile.find(
                { discordId: `${interaction.member?.user.id}` },
                'username pfp discordId verifiedServers',
                async (err, profile) => {
                    if (err) console.log(err);
                    if (interaction.options.getAttachment('image'))
                        Tweet.setImage(
                            `${
                                interaction.options.getAttachment('image')
                                    ?.proxyURL
                            }`
                        );
                    if (
                        profile[0]?.verifiedServers.includes(
                            interaction.guild?.id as string
                        )
                    ) {
                        Tweet.setTitle(
                            '<:verified:869045206857711657> TWOTTER'
                        );
                    }
                    await interaction.channel?.send({
                        embeds: [
                            Tweet.setDescription(
                                `${interaction.options.getString('content')}`
                            ).setAuthor({
                                name:
                                    profile[0].username ||
                                    interaction.user.username,
                                iconURL:
                                    profile[0].pfp ||
                                    //@ts-ignore
                                    `https://cdn.discordapp.com/avatars/${interaction.member?.id}/${interaction.member?.user.avatar}.webp?size=256`,
                            }),
                        ],
                    });
                    if (
                        interaction.options.getString('content')?.includes('<@')
                    ) {
                        interaction.options
                            .getString('content')
                            ?.split(' ')
                            .forEach((val) => {
                                /<@!?(\d+)>/.test(val)
                                    ? interaction.channel?.send(`${val}`)
                                    : null;
                            });
                    }

                    await interaction.reply({
                        content: 'Sent!',
                        ephemeral: true,
                    });
                }
            );
        } else if (interaction.options.getSubcommand() === 'set-profile') {
            Profile.find(
                { id: `${interaction.member?.user.id}` },
                'username pfp discordId',
                async (err, profileData) => {
                    if (profileData.length === 0) {
                        Profile.create({
                            id: `${interaction.member?.user.id}`,
                            username:
                                interaction.options.getString('username') ||
                                interaction.user.username,
                            pfp:
                                interaction.options.getAttachment(
                                    'profile-picture'
                                ) ||
                                //@ts-ignore
                                `https://cdn.discordapp.com/avatars/${interaction.member?.id}/${interaction.member?.user.avatar}.webp?size=256`,
                            verifiedServers: [],
                        });
                    }
                    if (err) console.log(err);

                    Profile.findOneAndRemove(
                        { discordId: `${interaction.member?.user.id}` },
                        null,
                        (err) => {
                            if (err) console.log(err);
                        }
                    );
                    const profile = new Profile({
                        discordId: `${interaction.member?.user.id}`,
                        username:
                            interaction.options.getString('username') ||
                            profileData[0].username,
                        pfp:
                            interaction.options.getAttachment('profile-picture')
                                ?.proxyURL || profileData[0].pfp,
                    });
                    profile.save((err) => {
                        if (err) console.log(err);
                    });
                    await interaction.reply({
                        content: 'Profile Set!',
                        ephemeral: true,
                    });
                }
            );
        } else if (interaction.options.getSubcommand() === 'verify-profile') {
            //@ts-ignore
            //get managerRoleId of the server from database
            Server.find(
                { serverId: `${interaction.guildId}` },
                'managerRoleId',
                async (err, serverData) => {
                    if (err) console.log(err);
                    if (
                        //@ts-ignore
                        interaction.member?.roles.cache.has(
                            serverData[0].managerRoleId
                        )
                    ) {
                        Profile.find(
                            { discordId: `${interaction.member?.user.id}` },
                            'verifiedServers',
                            async (err, profileData) => {
                                if (err) console.log(err);
                                if (
                                    !profileData[0].verifiedServers.includes(
                                        interaction.guildId as string
                                    )
                                ) {
                                    Profile.findOneAndUpdate(
                                        { discordId: `${interaction.member?.user.id}` },
                                        {
                                            $push: {
                                                verifiedServers:
                                                    interaction.guildId as string,
                                            },
                                        },
                                        { new: true },
                                        async (err) => {
                                            if (err) console.log(err);
                                            await interaction.reply({
                                                content: 'Verified!',
                                                ephemeral: true,
                                            });
                                        }
                                    );
                                } else {
                                    await interaction.reply({
                                        content: 'Already Verified!',
                                        ephemeral: true,
                                    });
                                }
                            }
                        );
                    }
                }
            );
        } else if (interaction.options.getSubcommand() === 'unverify-profile') {
            //@ts-ignore
            //get managerRoleId of the server from database
            Server.find(
                { serverId: `${interaction.guildId}` },
                'managerRoleId',
                async (err, serverData) => {
                    if (err) console.log(err);
                    if (
                        //@ts-ignore
                        interaction.member?.roles.cache.has(
                            serverData[0].managerRoleId
                        )
                    ) {
                        Profile.find(
                            { discordId: `${interaction.member?.user.id}` },
                            'verifiedServers',
                            async (err, profileData) => {
                                if (err) console.log(err);
                                if (
                                    profileData[0].verifiedServers.includes(
                                        interaction.guildId as string
                                    )
                                ) {
                                    Profile.findOneAndUpdate(
                                        { discordId: `${interaction.member?.user.id}` },
                                        {
                                            $pull: {
                                                verifiedServers:
                                                    interaction.guildId as string,
                                            },
                                        },
                                        { new: true },
                                        async (err) => {
                                            if (err) console.log(err);
                                            await interaction.reply({
                                                content: 'Unverified!',
                                                ephemeral: true,
                                            });
                                        }
                                    );
                                } else {
                                    await interaction.reply({
                                        content: 'Not Verified!',
                                        ephemeral: true,
                                    });
                                }
                            }
                        );
                    }
                }
            );
        }
    }
}