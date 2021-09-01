const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "help",
    description: "Sends you a list of my commands",
    aliases: ['commands', 'command', 'h'],
    examples: ['!help search'],
    execute(message, args) {
        const data = [];
        const { commands } = message.client;

        if(!args.length) {
            data.push('Here\'s a list of all my commands:');
            data.push(commands.map(command => command.name).join(' \n'));


            const embed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Roleplay Bot Commands List')
                .setDescription(`${data}`)
                .setTimestamp()
                .setThumbnail('https://i.file.glass/ihdhj.png')
                .setFooter('You can send !help [command name] to get info on a specific command!')
        

            return message.author.send(embed)
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('I\'ve sent you a DM with all my commands!');
                })
                .catch(error => {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                    message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
                });
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('that\'s not a valid command!');
        }

        data.push(`**Name:** ${command.name}\n`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases}\n`);
        if (command.description) data.push(`**Description:** ${command.description}\n`);
        if (command.examples) data.push(`**Example:** ${command.examples}`);


        const embed2 = new MessageEmbed()
        .setColor('#0099ff')
        .setDescription(`${data.join(" ")}`)
        .setTimestamp()
        .setFooter('Command Lookup')

        message.channel.send(embed2);
    },
};//embed