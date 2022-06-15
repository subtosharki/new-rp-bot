import { CommandInteraction, MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('text')
        .setDescription('Texts the mentioned user')
        .setDMPermission(false)
        .addUserOption((option) =>
            option
                .setName('user')
                .setDescription('The user to text')
                .setRequired(true)
        ),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('');
    },
};
