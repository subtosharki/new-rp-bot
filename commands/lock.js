const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'lock',
	description: 'lock a vehicle in discord',
	aliases: ['locks', 'lock-veh', 'locks-veh', 'lock-car', 'locks-car'],
	examples: ['!lock'],
	execute(message, args) {
		message.reply(`You have successfully locked your vehicle. Please provide description under this message`);
	},
};//embed