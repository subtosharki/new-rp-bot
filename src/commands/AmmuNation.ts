import type { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { AmmuNation } from '../templates/Embeds';

export = {
    data: new SlashCommandBuilder()
        .setName('ammunation')
        .setDescription('Sends a ammu-nation message')
        .setDMPermission(false)
        .addStringOption((option) =>
            option
                .setName('location')
                .setDescription('Location of the Ammu-nation')
                .setRequired(true)
                .addChoice(
                    "Adam's Apple Boulevard and Elgin Avenue in Downtown Los Santos",
                    "Adam's Apple Boulevard and Elgin Avenue in Downtown Los Santos"
                )
                .addChoice(
                    'Lindsay Circus and Palomino Avenue in Little Seoul',
                    'Lindsay Circus and Palomino Avenue in Little Seoul'
                )
                .addChoice(
                    'Popular Street in Cypress Flats, East Los Santos',
                    'Popular Street in Cypress Flats, East Los Santos'
                )
                .addChoice(
                    'Tataviam Truckstop, in the Tataviam Mountains',
                    'Tataviam Truckstop, in the Tataviam Mountains'
                )
                .addChoice('Paleto Bay', 'Paleto Bay')
                .addChoice(
                    'Algonquin Boulevard, Sandy Shores',
                    'Algonquin Boulevard, Sandy Shores'
                )
                .addChoice(
                    'Boulevard Del Perro, Morningwood',
                    'Boulevard Del Perro, Morningwood'
                )
                .addChoice(
                    'Vinewood Plaza, Spanish Avenue, Hawick',
                    'Vinewood Plaza, Spanish Avenue, Hawick'
                )
                .addChoice(
                    '325 Vespucci Boulevard in Mission Row',
                    '325 Vespucci Boulevard in Mission Row'
                )
                .addChoice(
                    'Chumash Plaza, Great Ocean Highway, Chumash',
                    'Chumash Plaza, Great Ocean Highway, Chumash'
                )
        )
        .addStringOption((option) =>
            option
                .setName('status')
                .setDescription('Choose if the AmmuNation is opened or closed')
                .setRequired(true)
                .addChoice('Open', 'Open')
                .addChoice('Closed', 'Closed')
        ),
    async execute(interaction: CommandInteraction) {
        const location: string | null =
            interaction.options.getString('location');
        const status: string | null = interaction.options.getString('status');

        await interaction.reply({
            embeds: [
                AmmuNation.setDescription(
                    `The AmmuNation in **${location}** is now **${status}**!`
                ),
            ],
        });
    },
};
