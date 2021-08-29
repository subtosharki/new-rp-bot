module.exports = {
    name: "vitals",
    description: "checks the @ users vitals",
    execute(message, args) {
      const user = message.author;
      const taggedUser = message.mentions.users.first();
        if (taggedUser === undefined) {
            message.reply("Please mention someone");
            return;
          }
		message.channel.send(`${taggedUser}, ${user} Is checking your vitals please answer the following: \n What is your pulse? \n Do you have a clear airway? \n What is your Blood Pressure?`);
    },
};//embed