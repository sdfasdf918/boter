const Schema = require('../../models/welcomeSchema');

const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'set-welcome',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(
            new MessageEmbed()
            .setTitle("you don't have permissions to use this command")
        )

        const channel = message.mentions.channels.first();
        if (!channel) return message.channel.send('please mention channel')

        Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
            if(data){
                data.Channel = channel.id;
                data.save();
            } else {
                new Schema({
                    Guild: message.guild.id,
                    Channel: channel.id
                }).save();
            }
            message.reply(`${channel} has been set as welcome channel`)
        })
    }
}