const { MessageEmbed } = require("discord.js");
const owners = '751118188330221658';
module.exports = {
    name: 'setavatar',
    category: 'admin',
    description: 'set set avatar',
    run: (client, message, args) =>{

        if (!owners.includes(message.author.id))
          return message.channel.send(
            `** :x: Only Owners Can   Use this Command **`
          );
        if (!args)
          return message.channel.send(
            `** :x: Please Provide me an avatar for the bot !**`
          );
          client.user.setAvatar("https://images-ext-2.discordapp.net/external/3_ifIjG68182YXvBT9s_2lWrUKfmCun26U6ywQRqF6E/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/763005611864227862/ff47ce920eb2d3545a72074b3a189f01.webp?width=646&height=646");
        message.channel.send(`Changing The bot's Avatar ...`).then(me => {
          me.edit(` Done !`);
        });
    }
}