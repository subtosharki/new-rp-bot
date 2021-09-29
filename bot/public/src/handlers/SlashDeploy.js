const fs = require('fs');
const consola = require('consola');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
module.exports = { deploy };
function deploy() {
    const commands = [];
    const commandFiles = fs
        .readdirSync(`bot/dev/src/commands`)
        .filter((file) => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`../commands/${file}`);
        commands.push(command.data.toJSON());
    }

    const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

    (async () => {
        try {
            await rest.put(
                Routes.applicationGuildCommands(
                    process.env.CLIENTID,
                    process.env.GUILDID //remove this line when putting in public so global commands take effect
                ),
                { body: commands }
            );

            consola.success('Successfully registered application commands.');
        } catch (error) {
            consola.error(error);
        }
    });
}
