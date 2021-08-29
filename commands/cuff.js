const { MessageEmbed } = require('discord.js');
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

module.exports = {
    name: "cuff",
    description: "Applies handcuffs to a user",
    aliases: ['cuffs'],
    examples: ['!cuff <@318203855365996544>'],
    execute(message, args) {
      const user = message.author;
      const taggedUser = message.mentions.users.first();
        if (taggedUser === undefined) {
            message.reply("Please mention someone");
            return;
          }

          const Embed = new MessageEmbed()
          .setColor('0x004cff')
          .setDescription("Applying Cuffs...")
          .setTimestamp()


          const Embed2 = new MessageEmbed()
          .setColor('0x004cff')
          .setDescription(`**${user}** cuffed **${taggedUser}**!`)
          .setTimestamp()


          message.channel.send(Embed).then(msg => { 
            setTimeout(function(){ msg.edit(Embed2) }, 1000);
            });
            
    },
};