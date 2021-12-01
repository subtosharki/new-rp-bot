import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('cpr')
        .setDescription('Conducts CPR on the mentioned user')
        .addUserOption((option) =>
            option
                .setName('user')
                .setDescription('The user who you are going to perform CPR on')
                .setRequired(true)
        ),
    async execute(interaction: { reply: (arg0: string) => any }) {
        await interaction.reply('');
    },
};
