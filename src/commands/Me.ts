import type { CommandInteraction } from 'discord.js';
import { italic, SlashCommandBuilder } from '@discordjs/builders';
import Me from '../components/embeds/Me';

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
                    `${italic(
                        interaction.options.getString('action') as string
                    )}`
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
