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
            giveaway: "🎉🎉  **NEW GIVEAWAY** 🎉🎉",
                giveawayEnded: "@everyone\n\n🎉🎉 **GIVEAWAY ENDED** 🎉🎉",
                timeRemaining: "Time remaining: **{duration}**! ⏲️ ",
                inviteToParticipate: "**React with 🎉 to participate this giveaway **!",
                winMessage: "Congratulations, {winners}! You won **{prize}**🎊🎉 !",
                embedFooter: "Giveaways",
                noWinner: "😟 No Winner !",
                winners: "winner(s) 🥳",
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