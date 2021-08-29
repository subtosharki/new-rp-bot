const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'tackles',
	description: 'tackle a person in discord',
	aliases: ['tackle'],
	examples: ['tackle <@318203855365996544>'],
	execute(message, args) {
		const user = message.author;
		const taggedUser = message.mentions.users.first();
		  if (taggedUser === undefined) {
			  message.reply("Please mention someone");
			  return;
			}
			message.channel.send(`${taggedUser}, ${user} has tackled you down to the ground.`);
	},
};//embed