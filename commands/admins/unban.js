const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "unban",
    description: "Moderation",

    run: async(client, message, args) => {
      if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have the permission to use this command!");
        const id = args[0];
        if (!id) return message.channel.send('pleas send an id')
        const bannedmember = await message.guild.fetchBans();
        if (!bannedmember.find((user => user.user.id === id))) 
        return message.reply("user is not banned!");
        message.guild.members.unban(id)
        const done = new MessageEmbed()
        .setTitle('**DONE unban member ✅**')
        .setColor('RANDOM')
        message.channel.send(done)

    }
}