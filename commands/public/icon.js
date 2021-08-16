const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'icon',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const bannerUrl = await getUserBannerUrl(message.author.id, { size: 4096 });
        if (bannerUrl) {
            const embed = new MessageEmbed()
                .setTitle(`${message.author.username}'s banner`)
                .setDescription("Look at my banner, how cool is that?")
                .setImage(bannerUrl);
            message.channel.send(embed);
        } else {
            message.channel.send(
                new MessageEmbed()
                .setDescription("```**You don't have money to buy Discord Nitro... How sad...**```")
                );
        }
    }
}
