const express = require('express');
const app = express();
app.get('/', (req, res) => {
	res.send('tony is my dev');
});
app.listen(3000, () => {
	console.log('server started');
});
const {Collection, Client, MessageAttachment, MessageEmbed} = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true
})
const databasse = require('./database/giveaways.json')
///////////////////////////////
const { GiveawaysManager } = require("discord-giveaways");
const manager = new GiveawaysManager(client, {
        storage: __dirname+databasse,
        updateCountdownEvery: 5000,

        botsCanWin: false,
        exemptPermissions: [ "MANAGE_MESSAGES", "MANAGE_GUILD", "ADMINISTRATOR" ],
        embedColor: "#FF0000",
        embedColorEnd: "RED",
        reaction: "🎉"
    
});
client.giveawaysManager = manager;
const DisTube = require('distube')
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tony:youssef@cluster0.d4n6j.mongodb.net/Data', {useNewUrlParser: true, useUnifiedTopology: true});
var db = require('quick.db')
const disbut = require('discord-buttons')(client);
const weky = require('weky')
const config = require('./config.json')
const prefix = config.prefix
const token = config.token
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
///////////////////////////////////////
client.on('ready', () => {
    console.profile()
    client.user.setActivity("tony is my dev", {
  type: "STREAMING",
  url: "https://www.twitch.tv/tony"
});
    console.log(`${client.user.username} ✅`)
})
////////////////////////////////
client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
})
//////////////////////////////
client.on('ready', () => {
})
/////////////////////////////
client.login(token)
//////////////////////
client.on('guildMemberAdd', async(member) => {
    const Schema = require('./models/welcomeSchema');
    const Canvas = require('discord-canvas');

    Schema.findOne({ Guild: member.guild.id }, async(e, data) => {
        if (!data) return;
        const user = member.user
        const image = new Canvas.Welcome()
            .setUsername(user.username)
            .setDiscriminator(user.discriminator)
            .setMemberCount(member.guild.memberCount)
            .setGuildName(member.guild.name)
            .setAvatar(user.displayAvatarURL({ format: 'png' }))
            .setColor("border", "#fc7b03")
            .setColor("username-box", "#fc7b03")
            .setColor("discriminator-box", "#fc7b03")
            .setColor("message-box", "#fc7b03")
            .setColor("title", "#fc7b03")
            .setColor("avatar", "#fc7b03")
            .setBackground(
              "https://wallpaper-house.com/data/out/21/wallpaper2you_8901.png"
              )
            .toAttachment();
            const attachment = new MessageAttachment(
              (await image).toBuffer(),
               "goodbye-image.png");
               const channel = client.channels.cache.get(data.Channel);
            channel.send(attachment);
    });
});
client.on('guildMemberRemove', async(member) =>{
    const Sschema = require('./models/leaveScheama');
    const Canvas = require('discord-canvas');

    Sschema.findOne({ Guild: member.guild.id }, async(e, data) => {
        if (!data) return;
        const user = member.user
        const image = new Canvas.Goodbye()
            .setUsername(user.username)
            .setDiscriminator(user.discriminator)
            .setMemberCount(member.guild.memberCount)
            .setGuildName(member.guild.name)
            .setAvatar(user.displayAvatarURL({ format: 'png' }))
            .setColor("border", "#fc7b03")
            .setColor("username-box", "#fc7b03")
            .setColor("discriminator-box", "#fc7b03")
            .setColor("message-box", "#fc7b03")
            .setColor("title", "#fc7b03")
            .setColor("avatar", "#fc7b03")
            .setBackground(
              "https://wallpaper-house.com/data/out/21/wallpaper2you_8901.png"
              )
            .toAttachment();
            const attachment = new MessageAttachment(
              (await image).toBuffer(),
               "goodbye-image.png");
               const channel = client.channels.cache.get(data.Channel);
            channel.send(attachment);
    });
});
///////////
const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });
client.on("message", async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift();

    if (command == "play")
    distube.play(message, args.join(" "));
    if (["repeat", "loop"].includes(command))
        distube.setRepeatMode(message, parseInt(args[0]));

    if (command == "stop") {
        distube.stop(message);
        message.channel.send("Stopped the music!");
    }

    if (command == "skip")
        distube.skip(message);

    if (command == "queue") {
        let queue = distube.getQueue(message);
        message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
            `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
        ).slice(0, 10).join("\n"));
    }

    if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(command)) {
        let filter = distube.setFilter(message, command);
        message.channel.send("Current queue filter: " + (filter || "Off"));
    }
});
const status = (queue) => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

distube
.on("playSong", (message, queue, song) => message.channel.send(
    `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}\n${status(queue)}`
))
.on("addSong", (message, queue, song) => message.channel.send(
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
))
.on("playList", (message, queue, playlist, song) => message.channel.send(
   `Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`
))
.on("addList", (message, queue, playlist) => message.channel.send(
    `Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`
))
.on("searchResult", (message, result) => {
    let i = 0;
    message.channel.send(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`);
})
.on("searchCancel", (message) => message.channel.send(`Searching canceled`))
.on("error", (message, e) => {
        console.error(e)
        message.channel.send("An error encountered: " + e);
});