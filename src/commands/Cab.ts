import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders'

export = {
    data: new SlashCommandBuilder()
        .setName('cab')
        .setDescription('Sends a Downtown Cab Co. message')
        .addStringOption(option =>
            option.setName('location')
                .setDescription('Your location for a cab to pick you up')
                .setRequired(true)),
    async execute(interaction: { options: { getString: (arg0: string) => string; }; member: any; reply: (arg0: { embeds: any[]; }) => any; }) {
        const location:string = interaction.options.getString('location');
        const embed:any = new MessageEmbed()
        .setColor('#FFCC00')
        .setTitle('Downtown Cab Co.')
        .setThumbnail('https://i.file.glass/zPI24pSfDz.png ')
        .setTimestamp()
        .setDescription(`A cab has been requested by ${interaction.member} at **${location}**`);
        await interaction.reply({ embeds: [embed] });
    },
};
