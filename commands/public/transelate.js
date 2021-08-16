const { Client, Message, MessageEmbed } = require('discord.js');
var translate = require('translation-google');
module.exports = {
    name: 'translate',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        translate(args.join(" "), {to: 'ar'}).then(res => {
            message.channel.send(
                new MessageEmbed()
                .setColor('RED')
                .addField('الترجمه هي :', `**${res.text}**`)
                .setFooter(`${message.author.username}`, message.author.avatarURL({dynamic:true}))
            );
        }).catch(err => {
            console.error(err);
        });
    }
}