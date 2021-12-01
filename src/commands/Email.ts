import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('email')
        .setDescription('Emails the mentioned user')
        .addUserOption((option) =>
            option
                .setName('user')
                .setDescription('The user you are going to email')
                .setRequired(true)
        ),
    async execute(interaction: { reply: (arg0: string) => any }) {
        await interaction.reply('');
    },
};
