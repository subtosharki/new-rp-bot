const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'racks-weapon',
	description: 'rack your weapon in a car in discord',
	aliases: ['racks', 'rack', 'rack-weapon'],
	examples: ['!racks-weapon'],
	execute(message, args) {
		const user = message.author;
			message.channel.send(`${user} You have successfully racked your weapon`);
	},
};//embed