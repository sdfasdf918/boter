const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const canvacord = require('canvacord')
module.exports = {
    name: 'rip',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        let user = message.mentions.users.first() || message.author;
        
        let avatar = user.displayAvatarURL({ format: 'png' });

        if (message.author.bot) return;

        let image = await canvacord.Canvas.rip(avatar);
        let attachment = new MessageAttachment(image, "triggered.png");
        return message.channel.send(attachment);
        
    }
}