const { Channel } = require("discord.js");

module.exports = {
    name: 'pog',
    description: 'this is a pog command',
    execute(message, args){
        if (args == Math.floor(args) && args.length > 0){
            if (args > 420){
                message.channel.send('Enough foolin\' around.');
                return;
            }
            var i;
            var res = ' ';
            for (i = 0; i < args; i++)
                res += ' pog';
            message.channel.send(res);
            return;
        }
        message.channel.send('pog');
    }
}