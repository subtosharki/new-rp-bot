import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Share your location with another user')
        .addUserOption((option) =>
            option
                .setName('user')
                .setDescription('The user you are sharing your location with')
                .setRequired(true)
        ),
    async execute(interaction: { reply: (arg0: string) => any }) {
        await interaction.reply('Pong!');
    },
};
