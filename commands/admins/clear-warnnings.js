const { Client, Message, MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = {
    name: 'clear-warnnings',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const command = args.shift().toLowerCase();
        const user = message.mentions.users.first()
        if(message.channel.type === 'dm') return;

        if(user) {
                if(!db.has(`warnnings_${user.id}_reason`)) return message.channel.send(
                    new MessageEmbed()
                    .setTitle('❌| cannot find any warnnings for this user')
                )
                if(db.has(`warnnings_${user.id}_reason`)) {
                db.delete(`warnnings_${user.id}_reason`)
                message.channel.send(
                    new MessageEmbed()
                    .setTitle(`✅| removed all warnnings for ${user.username},`)
                )
            }
        }
    }
}