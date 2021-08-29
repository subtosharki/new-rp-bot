module.exports = {
	name: 'uncuff',
	description: 'uncuff a person in discord',
	execute(message, args) {
		const user = message.author;
		const taggedUser = message.mentions.users.first();
		  if (taggedUser === undefined) {
			  message.reply("Please mention someone");
			  return;
			}
			message.reply(`You have successfully uncuffed ${taggedUser}`);
	},
};//embed