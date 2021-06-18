const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "ban",
    description: "Moderation",

    run: async(client, message, args) => {

        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if (!mentionMember) return;
        const embed = new MessageEmbed()
        .setTitle(`You were banned from **${message.guild.name}**`)
        .setDescription(`Reason: ${reason} \nModerator: ${message.author.tag} (id: ${message.author.id})`)
        .setColor("RANDOM")
        .setTimestamp();
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have the permission to use this command!");

        if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send("I don't have the permission to do that!");

        if (mentionMember.id === message.author.id) return message.channel.send("You can't ban yourself!");

        if (!reason) reason = "No reason given";

        if(!mentionMember) return message.channel.send ("You didn't specified any user!");

        if(!mentionMember.bannable) return message.channel.send("I was unable to ban this user!");

        mentionMember.send(embed)
        .then(() => mentionMember.ban())
        .then(() => message.channel.send(`${mentionMember.user.tag} (id: ${mentionMember.id}) was successfully banned.`));
    }
}