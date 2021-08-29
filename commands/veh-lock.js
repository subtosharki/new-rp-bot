module.exports = {
	name: 'veh-lock',
	description: 'lock a vehicle in discord',
	execute(message, args) {
		message.reply(`You have successfully locked your vehicle. Please provide description under this message`);
	},
};