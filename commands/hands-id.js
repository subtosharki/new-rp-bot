const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "hands-id",
    description: "hands id to the person you @",
    aliases: ['hand-id', 'give-id', 'gives-id'],
    examples: ['!hands-id <@318203855365996544>'],
    execute(message, args) {
      const user = message.author;
      const taggedUser = message.mentions.users.first();
        if (taggedUser === undefined) {
            message.reply("Please mention someone");
            return;
          }
		message.channel.send(`${taggedUser} ${user} has handed you their ID.`);
    },
};//embed