import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { commands } from '..';

export = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Shows a list of commands')
        .addStringOption((option) =>
            option
                .setName('command')
                .setDescription('Command to search for')
                .setRequired(false)
        ),
    async execute(interaction: {
        options: { getString: (arg0: string) => any };
        member: { user: { avatar: any; tag: any }; id: any };
        reply: (arg0: string) => any;
    }) {
        if (interaction.options.getString('command')) {
            const cmdsearch = interaction.options.getString('command');
            const command = commands.find((c: any) => cmdsearch == c.name);
            let avatar = interaction.member.user.avatar;
            let userID = interaction.member.id;
            let author = interaction.member.user.tag;
            const Search:any = new MessageEmbed()
                .setColor('#004cff')
                .setTitle('Some title')
                .setAuthor(
                    `${author}`,
                    `https://cdn.discordapp.com/avatars/${userID}/${avatar}.webp?size=256`
                )
                .setDescription('Some description here')
                .addField(command.name, command.description, true)
                .setTimestamp();

            if (!command) {
                await interaction.reply(`Command name ${cmdsearch} not found.`);
            } else {
                await interaction.reply({ embeds: [Search] });
            }
        } else {
            await interaction.reply(commands[0].name);
        }
    },
};
