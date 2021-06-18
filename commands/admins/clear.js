const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'clear',
    category : 'moderation',
    description : 'to clear message',
    run : async(client, message, args) => {
      if (!message.guild) return;
    if (!message.member.hasPermission('MANAGE_MESSAGES'))
      return message.channel.send("YOU dont has hasPermission to delete message");
		if (!args[0]) return message.reply('!من فضلك اكتب عدد الرسايل الي تبيه تتمسح');
		if (isNaN(args[0])) return message.reply('!من فضلك اكتب رقم مش حروف');
		if (args[0] > 100) return message.reply('انت تقدر تمسح رسايل من 1 الي 100 رساله');
		if (args[0] < 1) return message.reply('يجب عليك حذف رسالة واحدة على الأقل');
		await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
			message.channel.bulkDelete(messages).then(d=>{
				message.channel.send(`تم مسح ${args}رساله`).then(msg=>{
          msg.delete({ timeout: 2000 });
        });
			});
		});
    },
};
