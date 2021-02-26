const { Channel } = require("discord.js");

module.exports = {
    name: 'news',
    description: 'this is a news command',
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#00a1e2')
            .setDescription(
                'Bungie.net is the Internet home for Bungie, the developer of Destiny, ' +
                'Halo, Myth, Oni, and Marathon, and the only place with official Bungie info ' +
                'straight from the developers.'
            )
            .setImage('https://attackofthefanboy.com/wp-content/uploads/2015/09/bungie_logo.0.jpg')
            .setTitle('News | Bungie.net')
            .setURL('https://www.bungie.net/en/News')
            .setTimestamp();
            message.channel.send(newEmbed);
    }
}