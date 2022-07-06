import type { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('email')
        .setDescription('Emails the mentioned user')
        .setDMPermission(false)
        .addUserOption((option) =>
            option
                .setName('user')
                .setDescription('The user you are going to email')
                .setRequired(true)
        ),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('');
    },
};
