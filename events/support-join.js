module.exports = () => {
    const channelId = '873377288643833867'
	client.on('guildMemberAdd', (member) => {
    const message = `Welcome <@${member.id}> to the Roleplay Bot Support server! Feel free to look around and have a chat. if you have a bug to report, use <#873216377341755432>. If you have a suggestion, use <#873216353937539072>. if you need help with the bot, use <#873216334396260402>. Hope you enjoy using the bot!`
    const channel = member.guild.channels.cache.get(channelId)
    channel.send(message)
    });
};