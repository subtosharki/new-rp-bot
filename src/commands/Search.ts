import type { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder, bold } from '@discordjs/builders';
import Search from '../components/embeds/Search';

export = {
    data: new SlashCommandBuilder()
        .setName('search')
        .setDescription('Search a user')
        .setDMPermission(false)
        .addUserOption((option) =>
            option
                .setName('user')
                .setDescription('The user to search')
                .setRequired(true)
        ),
    async execute(interaction: CommandInteraction) {
        //@ts-ignore
        Search.description += bold(interaction.options.getMember('user'));
        await interaction.reply({ embeds: [Search] });

        //gotta do more on this
    },
};
