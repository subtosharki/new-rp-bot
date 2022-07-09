import consola from 'consola';
import { Client } from 'discord.js';

export = {
    name: 'ready',
    once: 'true',
    execute(client: Client) {
        let f: number = client.guilds.cache.reduce(
            (acc: any, guild: any) => acc + guild.memberCount,
            0
        );

        client.user?.setActivity(`Over ${f} Members`, { type: 'WATCHING' });
        consola.success(`Ready! Logged in as ${client.user?.tag}`);
    },
};
