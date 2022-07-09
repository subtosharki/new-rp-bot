import type { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('bot-settings')
        .setDescription('Bot Settings for the server owner only')
        .setDMPermission(true)
        .addSubcommandGroup((subcommandGroup) =>
            subcommandGroup
                .setName('general')
                .setDescription('General Settings')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('set-manager-role')
                        .setDescription(
                            'Set the role that can manage the bot settings (Defaults to the highest role)'
                        )
                        .addRoleOption((option) =>
                            option
                                .setName('role')
                                .setDescription('The role you want to set')
                                .setRequired(true)
                        )
                )
        ),

    async execute(interaction: CommandInteraction) {
        await interaction.reply('Pong!');
    },
};
