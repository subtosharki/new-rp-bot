const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('911')
    .setDescription('Call 911'),
    async execute(interaction) {
        await interaction.reply('');
    },
};
