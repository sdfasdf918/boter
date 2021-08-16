const Schema = require('../../models/welcomeSchema');
const Sschema = require('../../models/leaveScheama')
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'check-channel',
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

        Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
            if (!data) return message.channel.send('this Guild no data stored');

            const channel = client.channels.cache.get(data.Channel);
            message.channel.send(`welcome channel => ${channel}`)
        });
        Sschema.findOne({ Guild: message.guild.id }, async(err, data) => {
            if (!data) return message.channel.send('this Guild no data stored');

            const channel = client.channels.cache.get(data.Channel);
            message.channel.send(`welcome channel => ${channel}`)
        });
    }
}