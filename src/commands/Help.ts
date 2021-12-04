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
        reply: (arg0: {
            content?: string;
            ephemeral?: boolean;
            embeds?: any[];
            components?: any[];
        }) => any;
    }) {
        let avatar = interaction.member.user.avatar;
        let userID = interaction.member.id;
        let author = interaction.member.user.tag;

        const main = new MessageEmbed()
            .setColor('#004cff')
            .setAuthor(
                `${author}`,
                `https://cdn.discordapp.com/avatars/${userID}/${avatar}.webp?size=256`
            )
            .setTitle('Command List')
            .setFooter('Page 1/3')
            .setTimestamp();

        const main2 = new MessageEmbed()
            .setColor('#004cff')
            .setAuthor(
                `${author}`,
                `https://cdn.discordapp.com/avatars/${userID}/${avatar}.webp?size=256`
            )
            .setTitle('Command List')
            .setFooter('Page 2/3')
            .setTimestamp();

        const main3 = new MessageEmbed()
            .setColor('#004cff')
            .setAuthor(
                `${author}`,
                `https://cdn.discordapp.com/avatars/${userID}/${avatar}.webp?size=256`
            )
            .setTitle('Command List')
            .setFooter('Page 3/3')
            .setTimestamp();

        for (let i = 0; i < commands.length; i++) {
            main.addField(commands[i].name, commands[i].description, true);
        }
        for (let i = 25; i < commands.length; i++) {
            main2.addField(commands[i].name, commands[i].description, true);
        }
        for (let i = 50; i < commands.length; i++) {
            main3.addField(commands[i].name, commands[i].description, true);
        }
        if (interaction.options.getString('command')) {
            const cmdsearch = interaction.options.getString('command');
            const command = commands.find((c: any) => cmdsearch == c.name);
            const search: any = new MessageEmbed()
                .setColor('#004cff')
                .setAuthor(
                    `${author}`,
                    `https://cdn.discordapp.com/avatars/${userID}/${avatar}.webp?size=256`
                )
                .addField(command.name, command.description, true)
                .setFooter('Command Search')
                .setTimestamp();

            const err: any = new MessageEmbed()
                .setColor('#ff0000')
                .setAuthor(
                    `${author}`,
                    `https://cdn.discordapp.com/avatars/${userID}/${avatar}.webp?size=256`
                )
                .setTitle(`Command name ${cmdsearch} not found.`)
                .setFooter('Command Search')
                .setTimestamp();

            if (!command) {
                await interaction.reply({ embeds: [err], ephemeral: true });
            } else {
                await interaction.reply({ embeds: [search], ephemeral: true });
            }
        } else {
            await interaction.reply({
                embeds: [main, main2, main3],
                ephemeral: true,
            });
        }
    },
};
