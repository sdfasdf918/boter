
const welcome = require('./commands/admins/welcome');
const leave = require('./commands/admins/leave');
const express = require('express');
const app = express();
app.get('/', (req, res) => {
	res.send('tony is my developer');
});
app.listen(3000, () => {
	console.log('server started');
});
const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true
})
///////////////////////////////
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
    welcome(client)
    leave(client);
})
/////////////////////////////
client.login(token)
//////////////////////
