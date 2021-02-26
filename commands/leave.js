module.exports = {
    name: 'leave',
    description: 'lul',
    async execute(message, args){
        //check if user is in voice channel
        const voice_channel = message.member.voice.channel;
        if (!voice_channel) 
            return message.channel.send('Hey, hey! You gotta be in a channel for that.');

        await voice_channel.leave();
        await message.channel.send('Daddy Drifter signing off :kissing_heart:');
    }
}