const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'uncuff',
	description: 'uncuff a person in discord',
	aliases: ['uncuffs', 'un-cuffs', 'un-cuff'],
	examples: ['!uncuff <@318203855365996544>'],
	execute(message, args) {
		const user = message.author;
		const taggedUser = message.mentions.users.first();
		  if (taggedUser === undefined) {
			  message.reply("Please mention someone");
			  return;
			}
			message.reply(`You have successfully uncuffed ${taggedUser}`);
	},
};//embed