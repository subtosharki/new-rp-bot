const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "refuel",
    description: "fills up your car in discord with a 30sec wait",
    aliases: ['fuel'],
    examples: ['!refuel'],
    execute(message, args) {
		message.reply(`You are refuelling your vehicle, please keep in mind that you have 90 minutes of fuel left.`);
    },
};//embed