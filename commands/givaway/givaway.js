const Discord = require('discord.js');
const ms = require("ms");
const { prefix } = require('../../config.json')
module.exports = {
    name: 'start',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if (!message.guild) return;
        if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.reply("** :x: You don't have permission ADMINISTRATOR**");
 
         let time = args[0];
         let winners = args[1];
         let prize = args.slice(2).join(" ")
         if (!time || !winners || !prize) return message.reply(`Wrong Use | Usage : \n **${prefix}start** <time> <winners> <prize>`)
         if (isNaN(winners)) return message.reply(`Winner Need To Be Number`)
         if (!time) return message.reply(`1s , 1m , 1h , 1w , 1mn`)
            
        client.giveawaysManager.start(message.channel, {
            time: ms(args[0]),
            prize: args.slice(2).join(" "),
                    winnerCount: parseInt(args[1]),
            messages: {
            giveaway: "šš  **NEW GIVEAWAY** šš",
                giveawayEnded: "@everyone\n\nšš **GIVEAWAY ENDED** šš",
                timeRemaining: "Time remaining: **{duration}**! ā²ļø ",
                inviteToParticipate: "**React with š to participate this giveaway **!",
                winMessage: "Congratulations, {winners}! You won **{prize}**šš !",
                embedFooter: "Giveaways",
                noWinner: "š No Winner !",
                winners: "winner(s) š„³",
                endedAt: "Ended at",
                units: {
                    seconds: "seconds",
                    minutes: "minutes",
                    hours: "hours",
                    days: "days"
                }
    }
});
    }
}