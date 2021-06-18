const util = require('minecraft-server-util');
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'mcserver',
    description: 'get information about a minecraft server',
    run:(client, message, args) => {
        if(!args[0]) return message.channel.send('Please enter a minecraft server ip');
        const pd = `25565~19132~25575`;
        util.status(args[0], {port: parseInt(pd)}).then((response) =>{
            const embed = new MessageEmbed()
            .setColor('#BFCDEB')
            .setTitle('Mc server status')
            .addFields(
                {name: 'Server IP', value: response.host},
                {name: 'Online Players', value: response.onlinePlayers},
                {name: 'Max Players', value: response.maxPlayers},
                {name: 'Version', value: response.version}
            )
            message.channel.send(embed);
        })
        .catch ((error) =>{
            message.channel.send('there was an error finding this server');
            throw error;
        })
    }
}