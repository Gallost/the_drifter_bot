const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const { VoiceChannel } = require('discord.js');

module.exports = {
    name: 'play',
    description: 'lmao',
    async execute(message, args){
        //check if user is in voice channel
        const voice_channel = message.member.voice.channel;
        if (!voice_channel) 
            return message.channel.send('Hey, hey! You gotta be in a channel for that.');

        //check if user have permission
        const permissions = voice_channel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) 
            return message.channel.send('Hey, hey! You gotta have permissions Guardian.');

        //check if no argument
        if (!args.length)
            return message.channel.send('How \'bout an URL? You\'re just standing there!');

        //join the voice channel
        const connection = await voice_channel.join();  //creates a connection
        const video_finder = async (query) => {
            const video_result = await ytSearch(query); //searching for the video
            return (video_result.videos.length > 1) ? video_result.videos[0] : null;
        }

        const video = await video_finder(args.join(' '));   //search parameters from args

        if (video){
            const stream = ytdl(video.url, {filter: 'audioonly'});  //filter the video to audio only
            connection.play(stream, {seek: 0, volume: 0.5})   //play the audio in current connection
            .on('finish', () => {
                voice_channel.leave();  //leave the channel once the bot finishes playing
            });

            await message.reply(`Transmat is go, here it comes! **${video.title}**`);
        }
        else{
            message.channel.send('No can do brother, nothin\' is here.');
        }
    }
}