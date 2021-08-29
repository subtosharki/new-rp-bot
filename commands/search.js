module.exports = {
	name: 'search',
	description: 'search someone in discord',
	execute(message, args) {
		const user = message.author;
		const taggedUser = message.mentions.users.first();
		  if (taggedUser === undefined) {
			  message.reply("Please mention someone");
			  return;
			}
			message.channel.send(`${taggedUser}, ${user} is searching you, what do they find on you?`);
	},
};