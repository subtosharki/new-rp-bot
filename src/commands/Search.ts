import { CommandInteraction, MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('search')
        .setDescription('Search a user')
        .addUserOption((option) =>
            option
                .setName('user')
                .setDescription('The user to search')
                .setRequired(true)
        ),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('');
    },
};
