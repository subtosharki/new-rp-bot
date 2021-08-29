const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "eng-on",
    description: "turns on your engine in discord",
    examples: ['!eng-on'],
    execute(message, args) {
		message.reply(`You have sucessfully turned on the vehicle.`);
    },
};//embed