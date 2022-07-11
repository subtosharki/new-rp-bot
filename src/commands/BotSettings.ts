import type { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import Server from '../models/Server';
import { PermissionFlagsBits } from 'discord-api-types/v9';

export = {
    data: new SlashCommandBuilder()
        .setName('bot-settings')
        .setDescription('Bot Settings for the server admins only')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false)
        .addSubcommandGroup((subcommandGroup) =>
            subcommandGroup
                .setName('twitter-settings')
                .setDescription('Twitter Settings')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('verify-user')
                        .setDescription('Verify a user in your server')
                        .addUserOption((option) =>
                            option
                                .setName('user')
                                .setDescription('The user to verify')
                                .setRequired(true)
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('unverify-user')
                        .setDescription('Unverify a user in your server')
                        .addUserOption((option) =>
                            option
                                .setName('user')
                                .setDescription('The user to unverify')
                                .setRequired(true)
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('get-verified-users')
                        .setDescription('Get all verified users in your server')
                )
        ),

    async execute(interaction: CommandInteraction) {
        if (interaction.options.getSubcommand() === 'verify-user') {
            const user = interaction.options.getUser('user');
            const server = await Server.findOne({
                where: {
                    id: interaction.guild?.id,
                },
            });
            server?.verifiedUsers.push(user?.id as string);
            await server?.save();
            await interaction.reply({
                embeds: [
                    {
                        title: 'User Verified',
                        description: `${user?.username} has been verified`,
                    },
                ],
                ephemeral: true,
            });
        } else if (interaction.options.getSubcommand() === 'unverify-user') {
            const user = interaction.options.getUser('user');
            const server = await Server.findOne({
                where: {
                    id: interaction.guild?.id,
                },
            });
            server?.verifiedUsers.splice(
                server?.verifiedUsers.indexOf(user?.id as string),
                1
            );
            await server?.save();
            await interaction.reply({
                embeds: [
                    {
                        title: 'User Unverified',
                        description: `${user?.username} has been unverified`,
                    },
                ],
                ephemeral: true,
            });
        } else if (
            interaction.options.getSubcommand() === 'get-verified-users'
        ) {
            const server = await Server.findOne({
                where: {
                    id: interaction.guild?.id,
                },
            });
            const verifiedUsers = server?.verifiedUsers;
            const verifiedUsersString = verifiedUsers
                ?.map((user) => `<@${user}>`)
                .join(', ');
            await interaction.reply({
                embeds: [
                    {
                        title: 'Verified Users',
                        description: verifiedUsersString,
                    },
                ],
                ephemeral: true,
            });
        }
    },
};
