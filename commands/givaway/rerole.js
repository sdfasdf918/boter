const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'reroll',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const ms = require("ms"); 
        if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.reply("** :x: You don't have permission ADMINISTRATOR**");
      let messageID = args[0];
      if(!messageID) messageID = "**Not found :x: **";
        client.giveawaysManager.reroll(messageID).then(() => {
            message.channel.send("Success! Giveaway rerolled! :tada:");
        }).catch((err) => {
            message.channel.send("⛔ No giveaway found for "+messageID+", please check and try again");
        });
    }
}