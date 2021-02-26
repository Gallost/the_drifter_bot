const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client(); //creating the client
const prefix = '%'; //setting command prefix

//reading command files from separate dir
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


//main function
client.once('ready', () => {
    console.log('the drifter is online');
    client.user.setPresence({
        status: 'online',
        activity:{
            name: 'with his motes | %',
            type: 'PLAYING'
        }
    })
    .then(console.log)
    .catch(console.error);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command == 'pog')
        client.commands.get('pog').execute(message, args);

    else if (command == 'rate')
        client.commands.get('rate').execute(message, args);

    else if (command == 'news')
        client.commands.get('news').execute(message, args, Discord);
    
    else if (command == 'ding')
        client.commands.get('ding').execute(message, args);

    else if (command == 'play')
        client.commands.get('play').execute(message, args);
    
    else if (command == 'leave')
        client.commands.get('leave').execute(message, args);

    else if (command == 'image')
        client.commands.get('image').execute(message, args);
    
});

client.login('ODE0NjY5OTkwMDQ4NDMyMTY4.YDhOjQ.ObxYUcfEXGJmqRbsdwpKrQneVzw');