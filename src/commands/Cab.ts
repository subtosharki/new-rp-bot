import type { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { Cab } from '../templates/Embeds';

export = {
    data: new SlashCommandBuilder()
        .setName('cab')
        .setDescription('Sends a Downtown Cab Co. message')
        .setDMPermission(false)
        .addStringOption((option) =>
            option
                .setName('location')
                .setDescription('Your location for a cab to pick you up')
                .setRequired(true)
        ),
    async execute(interaction: CommandInteraction) {
        const location: string | null =
            interaction.options.getString('location');
        await interaction.reply({
            embeds: [
                Cab.setDescription(
                    `A cab has been requested by ${interaction.member} at **${location}**`
                ),
            ],
        });
    },
};
