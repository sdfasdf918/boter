const { Client, Message, MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = {
    name: 'antibots-off',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: (client, message, args) => {
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('you dont have Permission');
        message.channel.send('antibots is **off**')
        db.delete(message.guild.id + "on")
    }
}