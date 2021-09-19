const consola = require('consola');
module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        consola.success(`Ready! Logged in as ${client.user.tag}`);
        client.user.setActivity(`Developed by sharki#0001`);
    },
};
