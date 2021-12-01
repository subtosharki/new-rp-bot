import consola from 'consola';

export = {
    name: 'ready',
    once: 'true',
    execute(client: {
        guilds: { cache: any[] };
        user: {
            setActivity: (arg0: string, arg1: { type: string }) => void;
            tag: any;
        };
    }) {
        let f: number = client.guilds.cache.reduce(
            (acc, guild) => acc + guild.memberCount,
            0
        );

        client.user.setActivity(`Over ${f} Members`, { type: 'WATCHING' });
        consola.success(`Ready! Logged in as ${client.user.tag}`);
    },
};
