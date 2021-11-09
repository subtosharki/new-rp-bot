const consola = require('consola');

module.exports = {
    name: 'ready',
    once: 'true',
    execute(client) {
        client.user.setActivity('Over members', { type: 'WATCHING' });
        consola.success(`Ready! Logged in as ${client.user.tag}`);
    },
};
