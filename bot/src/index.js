const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();



//command handler
const commandFolders = fs.readdirSync('bot/src/commands');

for (const folder of commandFolders) {
	const commandFiles = fs
		.readdirSync(`bot/src/commands`)
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
		console.error(error);
		return interaction.reply({
			content: 'There was an error while executing this command!',
			ephemeral: true,
		});
	}
});
console.log('Command Handler Loaded!');

//event handler
const eventFiles = fs
	.readdirSync('bot/src/events')
	.filter((file) => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}
console.log('Event Handler Loaded!');

client.login(process.env.TOKEN);
