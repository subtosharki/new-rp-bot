module.exports = {
    name: "grabs",
    description: "grabs the person you @",
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