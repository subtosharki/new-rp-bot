import type { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import Inventory from '../models/Inventory';
import { Found } from '../components/embeds/Inventory';

export = {
    data: new SlashCommandBuilder()
        .setName('inventory')
        .setDescription('Inventory commands')
        .setDMPermission(false)
        .addSubcommand((subcommand) =>
            subcommand
                .setName('add-item')
                .setDescription('Add an item to your inventory')
                .addStringOption((option) =>
                    option
                        .setName('item')
                        .setDescription('The item you add to your inventory')
                        .setRequired(true)
                )
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName('remove-item')
                .setDescription('Remove an item to your inventory')
                .addStringOption((option) =>
                    option
                        .setName('item')
                        .setDescription(
                            'The item you want to remove from your inventory'
                        )
                        .setRequired(true)
                )
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName('get-inventory')
                .setDescription('Get your current inventory')
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName('reset-inventory')
                .setDescription('Reset your inventory')
        ),

    async execute(interaction: CommandInteraction) {
        if (interaction.options.getSubcommand() === 'add-item') {
            Inventory.findOne(
                //@ts-ignore
                { discordId: `${interaction.member?.id}` },
                'items',
                async (err, inventory) => {
                    if (err) console.log(err);
                    if (inventory) {
                        Inventory.updateOne(
                            //@ts-ignore
                            { discordId: `${interaction.member?.id}` },
                            {
                                $push: {
                                    items: `${interaction.options.getString(
                                        'item'
                                    )}`,
                                },
                            },
                            null,
                            async (err) => {
                                if (err) console.log(err);
                                await interaction.reply({
                                    content: `${interaction.options.getString(
                                        'item'
                                    )} has been added to your inventory`,
                                    ephemeral: true,
                                });
                            }
                        );
                    } else {
                        Inventory.create({
                            //@ts-ignore
                            discordId: `${interaction.member?.id}`,
                            items: [`${interaction.options.getString('item')}`],
                        });
                    }
                }
            );
        } else if (interaction.options.getSubcommand() === 'remove-item') {
            Inventory.findOne(
                //@ts-ignore
                { discordId: `${interaction.member?.id}` },
                'items',
                async (err, inventory) => {
                    if (err) console.log(err);
                    if (inventory) {
                        Inventory.updateOne(
                            //@ts-ignore
                            { discordId: `${interaction.member?.id}` },
                            {
                                $pull: {
                                    items: `${interaction.options.getString(
                                        'item'
                                    )}`,
                                },
                            },
                            null,
                            async (err) => {
                                if (err) console.log(err);
                                await interaction.reply({
                                    content: `${interaction.options.getString(
                                        'item'
                                    )} has been removed from your inventory`,
                                    ephemeral: true,
                                });
                            }
                        );
                    } else {
                        await interaction.reply({
                            content: `You don't have any items`,
                            ephemeral: true,
                        });
                    }
                }
            );
        } else if (interaction.options.getSubcommand() === 'get-inventory') {
            Inventory.findOne(
                //@ts-ignore
                { discordId: `${interaction.member?.id}` },
                'items',
                async (err, inventory) => {
                    if (err) console.log(err);
                    if (inventory!.items.length > 0) {
                        Found.description = '';
                        inventory!.items.forEach((item) => {
                            Found.description += `\n${item}, `;
                        });
                        await interaction.reply({
                            embeds: [Found],
                            ephemeral: true,
                        });
                    } else {
                        await interaction.reply({
                            embeds: [Found.setDescription(`No items Found`)],
                            ephemeral: true,
                        });
                    }
                }
            );
        } else if (interaction.options.getSubcommand() === 'reset-inventory') {
            Inventory.findOneAndDelete(
                //@ts-ignore
                { discordId: `${interaction.member?.id}` },
                null,
                async (err) => {
                    if (err) console.log(err);
                    await interaction.reply({
                        content: `Your inventory has been reset`,
                        ephemeral: true,
                    });
                }
            );
        }
    },
};
