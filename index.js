﻿const fs = require('fs');
const Discord = require('discord.js');
require('dotenv').config();
const prefix = process.env.PREFIX;
const { Client, Intents } = require('discord.js');



const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Discord.Collection();

console.log("Loading Command Handler...");
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();


	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
	}
});
console.log("Command Handler Loaded!");



console.log("Loading Event Handler...");
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}
console.log("Event Handler Loaded!");

client.on('ready', () => {
  console.log("Online");
});



client.login(process.env.TOKEN);