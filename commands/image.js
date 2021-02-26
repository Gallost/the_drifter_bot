var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer:{
        headless: true
    }
});

module.exports = {
    name: 'image',
    description: 'sends image',
    async execute(message, args){
        const image_query = args.join(' ');
        if (!image_query)
            return message.channel.send('Old Drifter need some sauce Guardian!');
        
        const image_results = await google.scrape(image_query, 50);
        var number_of_result = image_results.length;
        var randomized = await Math.floor(Math.random()*number_of_result);
        try{
            message.channel.send(image_results[randomized].url);
        }
        catch (error){
            console.log(error);
            message.channel.send(error);
        }
    }
}