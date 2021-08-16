const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'end',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.reply("** :x: You don't have permission ADMINISTRATOR**");
      let messageID = args[0];
        client.giveawaysManager.delete(messageID).then(() => {
            message.channel.send("Success! Giveaway Ended 🎊 !");
        }).catch((err) => {
          if(!messageID) messageID = "**None :x: **";
            message.channel.send("⛔ No giveaway found for "+messageID+", please check and try again");
        });
    }
}