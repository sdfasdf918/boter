const { MessageEmbed } = require("discord.js");
const owners = '751118188330221658';
module.exports = {
    name: 'setavatar',
    category: 'admin',
    description: 'set set avatar',
    run: (client, message, args) =>{
        let botnameee = args.slice(1).join(" ");
        if (!owners.includes(message.author.id))
          return message.channel.send(
            `** :x: Only Owners Can   Use this Command **`
          );
        if (!botnameee)
          return message.channel.send(
            `** :x: Please Provide me an avatar for the bot !**`
          );
        client.user.setAvatar(`${botnameee[1]}`);
        message.channel.send(`Changing The bot's Avatar ...`).then(me => {
          me.edit(` Done !`);
        });
    }
}