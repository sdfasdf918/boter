const Discord = require('discord.js');
const owners = '751118188330221658';
module.exports = {
    name: "setname",
    description: "Moderation",

    run: (client, message, args) => {
      let botnameee = args
      if (!owners.includes(message.author.id))
        return message.channel.send(
          `** :x: Only Owners Can   Use this Command **`
        );
      if (!botnameee)
        return message.channel.send(
          `** :x: Please Provide me a name for the bot !**`
        );
      client.user.setUsername(`${args}`);
      message.channel.send(`Changing The bot's Name ...`).then(me => {
        me.edit(` Done !`);
      });
    }
}