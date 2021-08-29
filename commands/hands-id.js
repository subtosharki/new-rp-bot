module.exports = {
    name: "hands-id",
    description: "hands id to the person you @",
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