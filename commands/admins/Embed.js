const {MessageEmbed} = require('discord.js')
module.exports = {
  name : "embed",
  category : "moderation",
  description : "to say message embed",
  run : (client, message, args)=>{
    if (!message.channel.guild) return;
    const embed = new MessageEmbed()
      .setDescription(`**${args}**`)
    message.channel.send(embed)

  }
}