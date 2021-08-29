const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'unlock',
	description: 'unlock a vehicle in discord',
	aliases: ['unlocks', 'unlock-veh', 'unlocks-veh', 'unlock-car', 'unlocks-car'],
	examples: ['!unlock'],
	execute(message, args) {
		message.reply(`You have successfully unlocked your vehicle`);
	},
};//embed