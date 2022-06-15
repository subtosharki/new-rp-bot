import { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { Tweet } from '../templates/Modals';

export = {
    data: new SlashCommandBuilder()
        .setName('twitter')
        .setDescription('Sends a twitter like message')
        .setDMPermission(false),
    async execute(interaction: CommandInteraction) {
        await interaction.showModal(Tweet);
        if (!interaction.isModalSubmit()) return;
        const display = interaction.fields.getTextInputValue('name');
        const content = interaction.fields.getTextInputValue('content');
        console.log({display, content})
    },
};
