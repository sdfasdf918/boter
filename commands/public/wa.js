const {MessageEmbed} = require('discord.js');
module.exports = {
	name: 'wa',
	description: 'لحسب ضريب سيط البرو بوت',
    run: (client, message, args) => {
    if (!message.guild) return;
    let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
    let tax3 = Math.floor(tax2 * (20) / (19) + (1))
    let tax4 = Math.floor(tax2 + tax3 + args2)
    if (!args2) return;
    if (isNaN(args2)) return;
    if (args2 < 1) return;
    if (args2 == 1) return;
    let embed = new MessageEmbed()
    .setAuthor(`${message.author.username}`, message.author.avatarURL({dynamic:true}))
    .setColor("RED")
    .addField(`**ضريبه الوسيط:**`, `**${tax2}**`)
    .addField(`**ضريبه التحويل:**`, `**${tax3}**`)
    .addField(`**المبلغ المطلوب تحويله:**`, `**${tax4}**`)
    .setThumbnail(message.author.avatarURL({dynamic:true,size: 1024}))
    .setTimestamp()
    .setFooter(`request by ${message.author.username}`, message.author.avatarURL({dynamic:true}));
    message.channel.send(embed);
	},
};