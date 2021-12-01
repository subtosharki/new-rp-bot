import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('grab')
        .setDescription('Grabs a user by force')
        .addUserOption((option) =>
            option
                .setName('user')
                .setDescription('The user to grab')
                .setRequired(true)
        ),
    async execute(interaction: { reply: (arg0: string) => any }) {
        await interaction.reply('');
    },
};
