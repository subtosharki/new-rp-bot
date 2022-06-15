import { CommandInteraction, MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('myfly')
        .setDescription('Sends a MyFly message')
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
        const embed: MessageEmbed = new MessageEmbed()
            .setColor('#8f9193')
            .setTitle('MyFly')
            .setThumbnail('https://i.file.glass/b6dh3.png')
            .setTimestamp()
            .setDescription(
                `MyFly Flight Number **${number}** in **${location}** is now **${status}**!`
            );

        await interaction.reply({ embeds: [embed] });
    },
};
