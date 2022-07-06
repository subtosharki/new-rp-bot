import type { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Share your location with another user')
        .setDMPermission(false)
        .addUserOption((option) =>
            option
                .setName('user')
                .setDescription('The user you are sharing your location with')
                .setRequired(true)
        ),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('Pong!');
    },
};
