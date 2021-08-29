const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "grabs",
    description: "grabs the person you @",
    aliases: ['grab'],
    examples: ['grabs <@318203855365996544>'],
    execute(message, args) {
      const user = message.author;
      const taggedUser = message.mentions.users.first();
        if (taggedUser === undefined) {
            message.reply("Please mention someone");
            return;
          }
		message.channel.send(`${user} has grabbed ${taggedUser} succesfully.`);
    },
};//embed