const { Channel } = require("discord.js");
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const { VoiceChannel } = require('discord.js');

module.exports = {
    name: 'rate',
    description: 'this is a rate command',
    async execute(message, args){
        message.channel.send('All right, all right, all right. Let\'s see what we\'ve got...');
        var res = Math.random()*10;
        var fixed = res.toFixed(1);

        //if (args == 9.5){
        //    fixed = 9.5;
        //}

        if (fixed > 9.5){
            var bump = Math.floor(Math.random()*101);
            if (bump == 69){
                fixed = 10;
                fixed = fixed.toFixed(0);
            }
        }

        message.channel.send('```' + fixed + '/10```');
        if (fixed < 5){
            message.channel.send(
                'I\'ve dealt with bad ones, but damn! This is on a whole new level!'
            );
        }
        else if (fixed < 7){
            if (fixed == 6.9){
                message.channel.send(
                    'Ding, Ding, Ding, Ding, Ding! Winner!'
                );
            }
            message.channel.send(
                'That\'s quite the haul, thank you very much! Old Drifter here ' +
                'is gonna put these to good use. Trust.'
            );
        }
        else if (fixed < 10){
            message.channel.send(
                'Hey, you fight dirty. I like it...'
            )
            message.channel.send(
                'I\'m gonna do something with all those *motes* you collected. ' +
                'Something that\'ll make you shiver...'
            )
        }
        else if  (fixed == 10){
            message.channel.send(
                'Ooh! That\'s a juicy cock! I\'ve never seen a fatter cock in my life... ' +
                'You can carry at least 20 motes on THAT thing.'
            );
            message.channel.send(
                'Ya know... You\'re more than welcome to deposit more than just *motes* in my ' +
                'bank Guardian, Mmm Mmm!'
            )
        }

        //cock rating in voice channel
        if (fixed == 9.5){
            var url = 'https://www.youtube.com/watch?v=OlJGYnQIVX0';

            //check if user is in voice channel
            const voice_channel = message.member.voice.channel;
            if (!voice_channel) 
                return;

            //check if user have permission
            const permissions = voice_channel.permissionsFor(message.client.user);
            if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) 
                return;

            //join the voice channel
            const connection = await voice_channel.join();  //creates a connection
            const video_finder = async (query) => {
                const video_result = await ytSearch(query); //searching for the video
                return (video_result.videos.length > 1) ? video_result.videos[0] : null;
            }

            const video = await video_finder(url);

            if (video){
                const stream = ytdl(video.url, {filter: 'audioonly'});  //filter the video to audio only
                connection.play(stream, {seek: 0, volume: 0.5})   //play the audio in current connection
                .on('finish', () => {
                    voice_channel.leave();  //leave the channel once the bot finishes playing
                });
            }
        }
    }
}