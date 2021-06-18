const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'user',
    category : 'info',
    description : 'to show about acounts',
    run : (client, message, args) => {
       
       if (!message.guild) return;
       const moment = require("moment"); //npm i moment
        if (message.author.bot) return;
        if (!message.guild) return message.reply("**:x: - This Command is only done on Servers**");
        message.guild.fetchInvites().then(invites => {
        let personalInvites = invites.filter( i => i.inviter.id === message.author.id);
        let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
        var roles = message.member.roles.cache.map(roles => `**__${roles.name}__ |**`).join(' ');
        let Embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(":beginner: | User Info...")
        .setAuthor(message.author.username, message.author.avatarURL({dynamic:true}))
        .addField("**✽ Name : **", message.author.username, true)
        .addField("**✽ Tag : **", message.author.discriminator, true)
        .addField("**✽ ID : **", message.author.id, true)
        .addField("**✽ Joined At : **", moment(message.member.joinedAt).format("D/M/YYYY h:mm a "), true)
        .addField("**✽ Created At : **", moment(message.author.createdAt).format("D/M/YYYY h:mm a "), true)
        .addField("**✽ Total invites : **", inviteCount, true)
       .addField("**✽ Total Roles : **", roles, true)
        .setTimestamp()
        .setThumbnail(message.author.avatarURL({dynamic:true,size: 1024}))
        .setFooter(client.user.username, client.user.avatarURL({dynamic:true}));
    message.channel.send(Embed);
  });
  }
}
