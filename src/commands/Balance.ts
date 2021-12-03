import { MessageEmbed } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { Client } from 'unb-api';
import dotenv from 'dotenv';
dotenv.config();
const client: any = new Client(process.env.UNB_TOKEN!);

export = {
    data: new SlashCommandBuilder()
        .setName('balance')
        .setDescription('Checks the users unbelievaboat balance')
        .addUserOption((option) =>
            option.setName('user').setDescription('Users balance to check')
        ),
    async execute(interaction: {
        member: {
            guild: { id: any };
            id: any;
            user: { tag: any; avatar: any };
        };
        options: {
            getUser: (arg0: string) => {
                (): any;
                new (): any;
                id: any;
                tag: any;
                avatar: any;
            };
        };
        reply: (arg0: { embeds: MessageEmbed[] }) => void;
    }) {
        const guildID = interaction.member.guild.id;
        let userID: number;
        let author: string;
        let avatar: any;

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
            avatar = interaction.member.user.avatar;
        } else {
            avatar = interaction.options.getUser('user').avatar;
        }
        let guild = client.getGuild(guildID);
        let bal = client.getUserBalance(guildID, userID);
        function x(bal: number) {
            return parseInt(
                bal.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
            );
        }
        let bank: number = (await bal).bank;
        let cash: number = (await bal).cash;
        let total: number = (await bal).total;
        let sym: string = (await guild).currencySymbol;

        bank = x(bank);
        cash = x(cash);
        total = x(total);

        const Embed = new MessageEmbed()
            .setColor('#03A8F4')
            .setAuthor(
                `${author}`,
                `https://cdn.discordapp.com/avatars/${userID}/${avatar}.webp?size=256`
            )
            .addFields(
                {
                    name: 'Cash: ',
                    value: sym + cash,
                    inline: true,
                },
                {
                    name: 'Bank: ',
                    value: sym + bank,
                    inline: true,
                },
                {
                    name: 'Total: ',
                    value: sym + total,
                    inline: true,
                }
            )
            .setTimestamp();

        await interaction.reply({ embeds: [Embed] });
    },
};
