import { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { Me } from '../templates/Embeds';

export = {
    data: new SlashCommandBuilder()
        .setName('me')
        .setDescription('Do a custom action')
        .setDMPermission(false)
        .addStringOption((option) =>
            option
                .setName('action')
                .setDescription('The action you are going to do')
                .setRequired(true)
        ),
    async execute(interaction: CommandInteraction) {
        await interaction.reply({
            embeds: [
                Me.setDescription(
                    `${interaction.options.getString('action')}`
                ).setAuthor({
                    //@ts-ignore
                    name: `${interaction.member?.nickname}`,
                    //@ts-ignore
                    iconURL: `https://cdn.discordapp.com/avatars/${interaction.member?.id}/${interaction.member?.user.avatar}.webp?size=256`,
                }),
            ],
        });
    },
};
