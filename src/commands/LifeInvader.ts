import { CommandInteraction, MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('life-invader')
        .setDescription('Sends a LifeInvader message')
        .setDMPermission(false)
        .addSubcommand((subcommand) =>
            subcommand
                .setName('register')
                .setDescription('Register an account')
                .addStringOption((option) =>
                    option
                        .setName('username')
                        .setDescription('The username for your account')
                        .setRequired(true)
                )
        )
        .addSubcommand((subcommand) =>
            subcommand.setName('post').setDescription('Post a message')
        ),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('');
    },
};
