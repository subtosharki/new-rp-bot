import { Guild } from 'discord.js';
import Server from '../models/Server';

export = {
    name: 'guildDelete',
    execute(guild: Guild) {
        Server.findOne({ serverId: guild.id }, (err: any, server: any) => {
            if (err) console.log(err);
            if (server[0]) {
                Server.deleteOne({ serverId: guild.id }, (err: any) => {
                    if (err) console.log(err);
                });
            }
        });
    },
};
