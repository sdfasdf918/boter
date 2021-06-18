const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'avatar',
    category : 'info',
    description : 'to see your avatar and avatar your frind',
    run : (client, message, args) => {
       if (!message.guild) return;
    let mention = message.mentions.users.first() || message.author;
  let EmbedAvatar = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Avatar Link")
    .setURL(mention.avatarURL({dynamic:true,size: 1024}))
    .setAuthor(mention.tag, mention.avatarURL({dynamic:true}))
    .setImage(mention.avatarURL({dynamic:true,size: 1024}))
    .setFooter(`request by ${message.author.username}`, message.author.avatarURL({dynamic:true}));
    message.channel.send(EmbedAvatar)
  }
}
