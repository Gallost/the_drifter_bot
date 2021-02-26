const { Channel } = require("discord.js");

module.exports = {
    name: 'ding',
    description: 'this is a ding command',
    execute(message, args){
        message.channel.send(
            'Ding Ding Ding Ding Ding!',
            {tts: true}
        );
    }
}