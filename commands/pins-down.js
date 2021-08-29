const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'pins-down',
	description: 'pin down a person in discord',
	aliases: ['pins', 'pin-down', 'pin'],
	examples: ['!pins-down <@318203855365996544>'],
	execute(message, args) {
		const user = message.author;
		const taggedUser = message.mentions.users.first();
		  if (taggedUser === undefined) {
			  message.reply("Please mention someone");
			  return;
			}
			message.channel.send(`${taggedUser}, ${user} Has got you successfully pinned down`);
	},
};//embed