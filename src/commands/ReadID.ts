import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('read-id')
        .setDescription("Reads a civilian's ID")
        .addUserOption((option) =>
            option
                .setName('user')
                .setDescription('The users id to read')
                .setRequired(true)
        ),
    async execute(interaction: { reply: (arg0: string) => any }) {
        await interaction.reply('');
    },
};
