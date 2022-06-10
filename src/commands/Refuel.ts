import { CommandInteraction, MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';

export = {
    data: new SlashCommandBuilder()
        .setName('refuel')
        .setDescription('Refuel a vehicle'),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('');
    },
};
