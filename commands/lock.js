const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'lock',
	description: 'lock a vehicle in discord',
	execute(message, args) {
		message.reply(`You have successfully locked your vehicle. Please provide description under this message`);
	},
};//embed