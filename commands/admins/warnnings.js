const { Client, Message, MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = {
    name: 'warnnings',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const user = message.mentions.users.first() || message.author.id();
        if(message.channel.type === 'dm') return;
            if(user) {
                if(!db.has(`warnnings_${user.id}_reason`)) return message.channel.send(
                    new MessageEmbed()
                    .setTitle('❌| cannot find any warnnings for this user')
                )
            let getwarnings = db.fetch(`warnnings_${user.id}_reason`)
            if(db.has(`warnnings_${user.id}_reason`)) {
            message.channel.send(
                new MessageEmbed()
                .setTitle(`${user.username} has ${getwarnings} warnning`)
            )
            }
        }
    }
}