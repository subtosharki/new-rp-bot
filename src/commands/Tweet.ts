import type { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { Tweet } from '../components/Embeds';
import Profile from '../models/Profile';

export = {
    data: new SlashCommandBuilder()
        .setName('twitter')
        .setDescription('Twitter')
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
        ),
    async execute(interaction: CommandInteraction) {
        if (interaction.options.getSubcommand() === 'post') {
            Profile.find(
                { discordId: `${interaction.member?.user.id}` },
                'username pfp discordId',
                async (err, profile) => {
                    if (err) console.log(err);
                    if (interaction.options.getAttachment('image')) {
                        Tweet.setImage(
                            `${
                                interaction.options.getAttachment('image')
                                    ?.proxyURL
                            }`
                        );
                    }
                    if (interaction.user.id === '318203855365996544') {
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
                    await interaction.reply({
                        content: 'Sent!',
                        ephemeral: true,
                    });
                }
            );
        } else {
            Profile.find(
                { id: `${interaction.member?.user.id}` },
                'username pfp discordId',
                async (err, profileData) => {
                    if (err) console.log(err);
                    Profile.findOneAndRemove(
                        { discordId: `${interaction.member?.user.id}` },
                        null,
                        (err) => {
                            if (err) console.log(err);
                        }
                    );
                    const profile = new Profile({
                        discordId:
                            profileData[0].discordId ||
                            `${interaction.member?.user.id}`,
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
        }
    },
};
