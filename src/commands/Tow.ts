import type { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('tow')
        .setDescription('Tows the mentioned users vehicle')
        .setDMPermission(false)
        .addUserOption((option) =>
            option
                .setName('user')
                .setDescription('The user who you are calling tow for')
                .setRequired(true)
        ),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('');
    },
};
