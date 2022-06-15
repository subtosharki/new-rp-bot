import { CommandInteraction, MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { TwentyFourSeven } from '../templates/Embeds';

export = {
    data: new SlashCommandBuilder()
        .setName('24-7')
        .setDescription('Sends a 24/7 message')
        .setDMPermission(false)
        .addStringOption((option) =>
            option
                .setName('location')
                .setDescription('Location of the 24/7')
                .setRequired(true)
                .addChoice(
                    'Alhambra Drive, Sandy Shores',
                    'Alhambra Drive, Sandy Shores'
                )
                .addChoice(
                    'Innocence Boulevard, Strawberry',
                    'Innocence Boulevard, Strawberry'
                )
                .addChoice(
                    'Clifton Avenue, Downtown Vinewood',
                    'Clifton Avenue, Downtown Vinewood'
                )
                .addChoice('Barbareno Road, Chumash', 'Barbareno Road, Chumash')
                .addChoice('Ineseno, Banham Canyon', 'Ineseno, Banham Canyon')
                .addChoice(
                    'Tataviam, Palomino Freeway',
                    'Tataviam, Palomino Freeway'
                )
                .addChoice('Route 68, Harmony', 'Route 68, Harmony')
                .addChoice(
                    'Senora Freeway, Grand Senora Desert',
                    'Senora Freeway, Grand Senora Desert'
                )
                .addChoice(
                    'Senora Freeway, Mount Chiliad',
                    'Senora Freeway, Mount Chiliad'
                )
                .addChoice(
                    'Vinewood Boulevard, Downtown Vinewood',
                    'Vinewood Boulevard, Downtown Vinewood'
                )
                .addChoice('Hawick Avenue, Alta', 'Hawick Avenue, Alta')
                .addChoice(
                    'Vinewood Plaza, Spanish Avenue',
                    'Vinewood Plaza, Spanish Avenue'
                )
                .addChoice('Elgin Avenue, Hawick', 'Elgin Avenue, Hawick')
                .addChoice(
                    'Korean Plaza, Calais Avenue',
                    'Korean Plaza, Calais Avenue'
                )
                .addChoice(
                    'Vespucci Boulevard, Little Seoul',
                    'Vespucci Boulevard, Little Seoul'
                )
                .addChoice('Route 68, Lago Zancudo', 'Route 68, Lago Zancudo')
        )
        .addStringOption((option) =>
            option
                .setName('status')
                .setDescription('Choose if the 24/7 is opened or closed')
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
                TwentyFourSeven.setDescription(
                    `The 24/7 in **${location}** is now **${status}**!`
                ),
            ],
        });
    },
};
