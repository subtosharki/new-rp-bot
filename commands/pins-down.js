module.exports = {
	name: 'pins-down',
	description: 'pin down a person in discord',
	execute(message, args) {
		const user = message.author;
		const taggedUser = message.mentions.users.first();
		  if (taggedUser === undefined) {
			  message.reply("Please mention someone");
			  return;
			}
			message.channel.send(`${taggedUser}, ${user} Has got you successfully pinned down`);
	},
};//embed