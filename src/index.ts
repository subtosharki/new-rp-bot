import fs from 'fs';
import { Client, Collection, Intents } from 'discord.js';
import dotenv from 'dotenv';
import consola from 'consola';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
dotenv.config();

//intents
const intents: any = new Intents(32767);
const client: any = new Client({ intents });

//command handler
client.commands = new Collection();
const commandFolders: any = fs.readdirSync('dist/commands');

for (const folder of commandFolders) {
    const commandFiles = fs
        .readdirSync(`dist/commands`)
        .filter((file) => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.data.name, command);
    }
}
client.on(
    'interactionCreate',
    async (interaction: {
        isCommand: () => any;
        commandName: any;
        reply: (arg0: { content: string; ephemeral: boolean }) => any;
    }) => {
        if (!interaction.isCommand()) return;
        const command: any = client.commands.get(interaction.commandName);
        if (!command) return;
        try {
            await command.execute(interaction);
        } catch (error) {
            consola.error(error);
            return interaction.reply({
                content:
                    'There was an error while executing this command! Contact the support team.',
                ephemeral: true,
            });
        }
    }
);
consola.success('Command Handler Loaded!');

//event handler
const eventFiles: any = fs
    .readdirSync('./dist/events')
    .filter((file) => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args: any) => event.execute(...args));
    } else {
        client.on(event.name, (...args: any) => event.execute(...args));
    }
}
consola.success('Event Handler Loaded!');

//comand deployer
const commands: any = [];
const commandFiles: any = fs
    .readdirSync(`dist/commands`)
    .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
    const command: any = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}
export = commands;
const rest = new REST({ version: '9' }).setToken(process.env.TOKEN!);

(async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENTID!,
                process.env.GUILDID! //remove this line when done dev
            ),
            { body: commands }
        );

        consola.success('Successfully registered application commands.');
    } catch (error) {
        consola.error(error);
    }
})();

client.login(process.env.TOKEN!);

//fix where when i export commands it dosnt come empty for some reason smh
