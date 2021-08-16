const { Client, Message, MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = {
    name: 'warn',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const user = message.mentions.users.first()
        if(message.channel.type === 'dm') return;
                if(!user) return message.channel.send(
                    new MessageEmbed()
                    .setTitle("member not found")
                    )
                if(user) {
        message.channel.send(
            new MessageEmbed()
            .setTitle(`**${user.username}** has been warnned!`)
        )
        user.send(
            new MessageEmbed()
            .setTitle(`⚠️| you have been warnned with reason **${args[1]}**`)
        ).catch(err => {(message.channel.send('cannot send warnning message in this member dm but he got the warnning in our database'))})
        db.add(`warnnings_${user.id}_reason`, 1)
        }
    }
}