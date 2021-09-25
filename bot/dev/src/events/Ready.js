const consola = require('consola');
module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        consola.success(`Ready! Logged in as ${client.user.tag}`);
        client.user.setActivity('Over A lot of members', { type: 'WATCHING' });
    },
};
