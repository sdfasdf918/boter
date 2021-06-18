const {MessageEmbed} =require('discord.js')
module.exports = {
	name: 'tax',
	description: 'لحسب ضريبه البرو بوت',
	run: (client, message, args) => {
    if (!message.guild) return;
    let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    if (!args2) return;
    if (isNaN(args2)) return;
    if (args2 < 1) return;
    if (args2 == 1) return;
    let EmbedAvaar = new MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL({dynamic:true,size: 1024}))
    .addField('**الضريبه هي:**', `**${tax}**`)
    .setTimestamp()
    .setFooter(`${message.author.username}`, message.author.avatarURL({dynamic:true}))
    message.channel.send(EmbedAvaar)
	},
};