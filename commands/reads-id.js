module.exports = {
	name: 'reads-id',
	description: 'read someones id in discord',
	execute(message, args) {
		const user = message.author;
		const taggedUser = message.mentions.users.first();
		  if (taggedUser === undefined) {
			  message.reply("Please mention someone");
			  return;
			}
			message.channel.send(`${taggedUser} ${user} is currently reading the ID you have given them, what do they read?`);
	},
};//embed