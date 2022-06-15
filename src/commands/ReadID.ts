import { CommandInteraction, MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('read-id')
        .setDescription("Reads a civilian's ID")
        .setDMPermission(false)
        .addUserOption((option) =>
            option
                .setName('user')
                .setDescription('The users id to read')
                .setRequired(true)
        ),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('');
    },
};
