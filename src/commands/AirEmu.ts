import { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { AirEmu } from '../templates/Embeds';


export = {
    data: new SlashCommandBuilder()
        .setName('airemu')
        .setDescription('Sends a AirEmu message')
        .setDMPermission(false)
        .addStringOption((option) =>
            option
                .setName('status')
                .setDescription('The status of your plane')
                .setRequired(true)
                .addChoice('Taking Off', 'Taking Off')
                .addChoice('Boarding', 'Boarding')
                .addChoice('Landing', 'Landing')
        )
        .addNumberOption((option) =>
            option
                .setName('flight-number')
                .setDescription('The flight number of your plane')
                .setRequired(true)
        )
        .addStringOption((option) =>
            option
                .setName('location')
                .setDescription('The location of the plane')
                .setRequired(true)
                .addChoice(
                    'Los Santos International Airport',
                    'Los Santos International Airport'
                )
                .addChoice('McKenzie Airfield', 'McKenzie Airfield')
                .addChoice('Sandy Shores Airfield', 'Sandy Shores Airfield')
                .addChoice(
                    'Fort Zancudo Military Base',
                    'Fort Zancudo Military Base'
                )
        ),
    async execute(interaction: CommandInteraction) {
        const location: string | null =
            interaction.options.getString('location');
        const status: string | null = interaction.options.getString('status');
        const number: number | null =
            interaction.options.getNumber('flight-number');

        await interaction.reply({
            embeds: [
                AirEmu.setDescription(
                    `AirEmu Flight Number **${number}** in **${location}** is now **${status}**!`
                ),
            ],
        });
    },
};
