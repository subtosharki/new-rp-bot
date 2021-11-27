import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders'
import { Client } from 'unb-api';
import dotenv from 'dotenv';
dotenv.config();
const client:any = new Client(process.env.UNB_TOKEN!);

export = {
    data: new SlashCommandBuilder()
        .setName('balance')
        .setDescription('Checks the users unbelievaboat balance')
        .addUserOption((option) =>
            option.setName('user').setDescription('Users balance to check')
        ),
    async execute(interaction: { member: { guild: { id: any; }; id: any; user: { tag: any; avatar: any; }; }; options: { getUser: (arg0: string) => { (): any; new(): any; id: any; tag: any; avatar: any; }; }; reply: (arg0: { embeds: MessageEmbed[]; }) => void; }) {
        const guildID = interaction.member.guild.id;
        let userID:number;
        let author:string
        let avatar:any

        if (!interaction.options.getUser('user')) {
            userID = interaction.member.id;
        } else {
            userID = interaction.options.getUser('user').id;
        }

        if (!interaction.options.getUser('user')) {
            author = interaction.member.user.tag;
        } else {
            author = interaction.options.getUser('user').tag;
        }

        if (!interaction.options.getUser('user')) {
            let avatar = interaction.member.user.avatar;
        } else {
            let avatar = interaction.options.getUser('user').avatar;
        }
        let guild = client.getGuild(guildID);
        let bal = client.getUserBalance(guildID, userID);
        const Embed = new MessageEmbed()
            .setColor('#03A8F4')
            .setAuthor(
                `${author}`,
                `https://cdn.discordapp.com/avatars/${userID}/${avatar}.webp?size=256`
            )
            .addFields(
                {
                    name: 'Cash: ',
                    value: `${(await guild).currencySymbol}${(await bal).cash}`,
                    inline: true,
                },
                {
                    name: 'Bank: ',
                    value: `${(await guild).currencySymbol}${(await bal).bank}`,
                    inline: true,
                },
                {
                    name: 'Total: ',
                    value: `${(await guild).currencySymbol}${
                        (await bal).total
                    }`,
                    inline: true,
                }
            )
            .setTimestamp();

        interaction.reply({ embeds: [Embed] });
    },
};
