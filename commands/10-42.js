module.exports = {
    name: "10-42",
    description: "sends a message in discord saying you are 10-42",
    execute(message, args) {
		message.reply('You have successfully marked yourself Off Duty');
    },
};