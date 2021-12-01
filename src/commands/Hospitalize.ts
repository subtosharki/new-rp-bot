import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('hospitalize')
        .setDescription('Hospitalizes the mentioned user')
        .addUserOption((option) =>
            option
                .setName('user')
                .setDescription('The user who you are going to hospitalize')
                .setRequired(true)
        ),
    async execute(interaction: { reply: (arg0: string) => any }) {
        await interaction.reply('');
    },
};
