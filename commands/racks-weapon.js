module.exports = {
	name: 'racks-weapon',
	description: 'rack your weapon in a car in discord',
	execute(message, args) {
		const user = message.author;
			message.channel.send(`${user} You have successfully racked your weapon`);
	},
};