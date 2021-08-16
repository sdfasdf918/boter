const { Client, Message, MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = {
    name: 'antibots-on',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: (client, message, args) => {
        if(!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send('you dont have Permission');
        message.channel.send('antibots is **on**')
        db.set(message.guild.id + "on", 'true')
    }
}

