import { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { Cuffed, Cuffing } from '../templates/Embeds';
import { setTimeout } from 'node:timers/promises';

export = {
    data: new SlashCommandBuilder()
        .setName('cuff')
        .setDescription('Applies handcuffs to a user')
        .addUserOption((option) =>
            option
                .setName('user')
                .setDescription('The user to cuff')
                .setRequired(true)
        ),
    async execute(interaction: CommandInteraction) {
        await interaction.reply({ embeds: [Cuffing] });
        await setTimeout(1500);
        await interaction.editReply({
            embeds: [
                Cuffed.setDescription(
                    `**${
                        interaction.member
                    }** cuffed **${interaction.options.getMember('user')}**!`
                ),
            ],
        });
    },
};
