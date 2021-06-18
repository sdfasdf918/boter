const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "kick",
    description: "Moderation",

    run: async(client, message, args) => {

        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" ");

        const embed = new MessageEmbed()
        .setTitle(`You were kicked from **${message.guild.name}**`)
        .setDescription(`Reason: ${reason} \nModerator: ${message.author.tag} (id: ${message.author.id})`)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(`You can join back in the server!`);

        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have the permission to use this command!");

        if (!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send("I don't have the permission to do that!");

        if (mentionMember.id === message.author.id) return message.channel.send("You can't kick yourself!");

        if (!reason) reason = "No reason given";

        if(!mentionMember) return message.channel.send ("You didn't specified any user!");

        if(!mentionMember.kickable) return message.channel.send("I was unable to kick this user!");

        mentionMember.send(embed)
        .then(() => mentionMember.kick())
        .then(() => message.channel.send(`${mentionMember.user.tag} (id: ${mentionMember.id}) was successfully kicked.`));
    }
}