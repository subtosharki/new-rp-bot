const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "eng-off",
    description: "turns off your engine in discord",
    examples: ['!eng-off'],
    execute(message, args) {
		message.reply(`You have sucessfully turned off the vehicle.`);
    },
};//embed