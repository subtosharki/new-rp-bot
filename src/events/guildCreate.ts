import { Guild } from "discord.js";
import Server from "../models/Server";

export = {
    name: 'guildCreate',
    execute(guild: Guild) {
        Server.findOne({ serverId: guild.id }, (err: any, server: any) => {
            if (err) console.log(err);
            if (!server[0]) {
                const newServer = new Server({
                    serverId: guild.id,
                    managerRoleId: guild.roles.highest.id,

                });
                newServer.save();
            }
        }
        );
    }
}
