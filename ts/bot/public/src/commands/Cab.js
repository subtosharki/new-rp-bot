const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cab')
        .setDescription('Sends a Downtown Cab Co. message'),
    async execute(interaction) {
        await interaction.reply('');
    },
};
