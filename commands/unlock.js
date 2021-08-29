const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'unlock',
	description: 'unlock a vehicle in discord',
	execute(message, args) {
		message.reply(`You have successfully unlocked your vehicle`);
	},
};//embed