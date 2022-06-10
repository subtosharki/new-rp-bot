import consola from 'consola';

export = {
    name: 'ready',
    once: 'true',
    execute(client: any) {
        let f: number = client.guilds.cache.reduce(
            (acc: any, guild: any) => acc + guild.memberCount,
            0
        );

        client.user.setActivity(`Over ${f} Members`, { type: 'WATCHING' });
        consola.success(`Ready! Logged in as ${client.user.tag}`);
    },
};
