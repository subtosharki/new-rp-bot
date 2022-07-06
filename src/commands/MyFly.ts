import type { CommandInteraction } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { bold, SlashCommandBuilder } from '@discordjs/builders';

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
                .addChoices(
                    {
                        name: 'Taking Off',
                        value: 'Taking Off',
                    },
                    { name: 'Boarding', value: 'Boarding' },
                    { name: 'Landing', value: 'Landing' }
                )
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
                .addChoices(
                    {
                        name: 'Los Santos International Airport',
                        value: 'Los Santos International Airport',
                    },
                    { name: 'McKenzie Airfield', value: 'McKenzie Airfield' },
                    {
                        name: 'Sandy Shores Airfield',
                        value: 'Sandy Shores Airfield',
                    },
                    {
                        name: 'Fort Zancudo Military Base',
                        value: 'Fort Zancudo Military Base',
                    }
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
                `MyFly Flight Number ${bold(
                    number as unknown as string
                )} in ${bold(location as string)} is now ${bold(
                    status as string
                )}!`
            );

        await interaction.reply({ embeds: [embed] });
    },
};
