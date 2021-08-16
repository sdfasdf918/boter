const { Client, Message, MessageEmbed, Util } = require('discord.js');

module.exports = {
    name: 'emoji',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if (!args.length) return message.channel.send(
            new MessageEmbed()
            .setTitle('please specify some emojis!')
        )

        for (const rawEmoji of args) {
            const parsedemoji = Util.parseEmoji(rawEmoji);

            if (parsedemoji.id) {
                const xetension = parsedemoji.animated ? '.gif' : '.png'
                const url = `https://cdn.discordapp.com/emojis/${parsedemoji.id + xetension}`;
                message.guild.emojis.create(url, parsedemoji.name).then((emoji) => {
                    message.channel.send(
                        new MessageEmbed()
                        .addField('DONE✅', `**upload emoji**`)
                        .setImage(`${emoji.url}`)
                     )
                })
            }
        }

    }
}