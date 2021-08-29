module.exports = {
	name: 'tackles',
	description: 'tackle a person in discord',
	execute(message, args) {
		const user = message.author;
		const taggedUser = message.mentions.users.first();
		  if (taggedUser === undefined) {
			  message.reply("Please mention someone");
			  return;
			}
			message.channel.send(`${taggedUser}, ${user} has tackled you down to the ground.`);
	},
};//embed