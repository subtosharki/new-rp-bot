import { ColorResolvable, MessageEmbed } from 'discord.js';

const normal: ColorResolvable = '#004cff';

export const TwentyFourSeven: MessageEmbed = new MessageEmbed()
    .setColor('#0db14b')
    .setTitle('24/7')
    .setThumbnail('https://i.file.glass/0eg7f.png')
    .setTimestamp();

export const AirEmu: MessageEmbed = new MessageEmbed()
    .setColor('#dba31e')
    .setTitle('AirEmu')
    .setThumbnail('https://i.file.glass/heh5h.png')
    .setTimestamp();

export const AmmuNation: MessageEmbed = new MessageEmbed()
    .setColor('#840204')
    .setTitle('AmmuNation')
    .setThumbnail('https://i.file.glass/d8j0i.jpg')
    .setTimestamp();

export const BugStars: MessageEmbed = new MessageEmbed()
    .setColor('#1e4278')
    .setTitle('BugStars')
    .setThumbnail('https://i.file.glass/21edi.png')
    .setTimestamp();

export const Cab: MessageEmbed = new MessageEmbed()
    .setColor('#FFCC00')
    .setTitle('Downtown Cab Co.')
    .setThumbnail('https://i.file.glass/zPI24pSfDz.png ')
    .setTimestamp();

export const Calling: MessageEmbed = new MessageEmbed()
    .setColor(normal)
    .setTimestamp();

export const Accepted: MessageEmbed = new MessageEmbed()
    .setColor('#3BA55C')
    .setTitle('Call Accepted')
    .setTimestamp();

export const Declined: MessageEmbed = new MessageEmbed()
    .setColor('#ff0000')
    .setTitle('Call Failed')
    .setTimestamp();

export const Cuffing: MessageEmbed = new MessageEmbed()
    .setColor(normal)
    .setTimestamp()
    .setDescription(`Applying cuffs...`);

export const Cuffed: MessageEmbed = new MessageEmbed()
    .setColor('#004cff')
    .setTimestamp();

export const Me: MessageEmbed = new MessageEmbed()
    .setColor(normal)
    .setTimestamp();

export const Tweet: MessageEmbed = new MessageEmbed()
    .setColor('#1d36f2')
    .setTitle('<:twitter:858110570087972884> TWOTTER')
    .setTimestamp();

export const Tor: MessageEmbed = new MessageEmbed()
    .setColor('#7D4698')
    .setAuthor({
        name: 'Anonymous',
        iconURL:
            'https://archive.flossmanuals.net/tech-tools-for-activism/_booki/tech-tools-for-activism/static/anon_logo.png',
    })
    .setTitle('<:tor:869045322704371806> Tor Project')
    .setTimestamp();

export const FlyUS: MessageEmbed = new MessageEmbed()
    .setColor('#085183')
    .setTitle('FlyUS')
    .setThumbnail('https://i.file.glass/j3abd.png')
    .setTimestamp();

export const Text: MessageEmbed = new MessageEmbed()
    .setColor('#00FF00')
    .setTitle('<:phone:868642237293142077> New Text Message')
    .setTimestamp();
