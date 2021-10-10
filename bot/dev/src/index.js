const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const dotenv = require('dotenv').config();
const consola = require('consola');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const db = require('./database/ConnectDB.js');

//database
db.connect();

//intents
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_VOICE_STATES,
    ],
});

//command handler
client.commands = new Collection();
const commandFolders = fs.readdirSync('js/bot/dev/src/commands');

for (const folder of commandFolders) {
    const commandFiles = fs
        .readdirSync(`js/bot/dev/src/commands`)
        .filter((file) => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.data.name, command);
    }
}
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;
    const command = client.commands.get(interaction.commandName);
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
});
consola.success('Command Handler Loaded!');

//event handler
const eventFiles = fs
    .readdirSync('./js/bot/dev/src/events')
    .filter((file) => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}
consola.success('Event Handler Loaded!');

//comand deployer
const commands = [];
const commandFiles = fs
    .readdirSync(`js/bot/dev/src/commands`)
    .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(process.env.DEV_TOKEN);

(async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands(
                process.env.DEV_CLIENTID,
                process.env.GUILDID //remove this line when putting in public so global commands take effect
            ),
            { body: commands }
        );

        consola.success('Successfully registered application commands.');
    } catch (error) {
        consola.error(error);
    }
})();

client.login(process.env.DEV_TOKEN);
