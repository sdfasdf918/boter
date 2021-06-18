const {MessageEmbed} = require('discord.js');
module.exports = {
  name: "say",
  category: "moderation",
  description: "to say your word",
  run : (client, message, args) =>{
    message.delete();
    message.channel.send(`${args}`)
  }
}