const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "fast",
    description: "fun",
    run: async(client, message, args) => {
      const { FastType } = require('weky');
const game = new FastType({
    message: message,
    winMessage: "GG you won!", // message sent when user types perfectly
    sentence: 'some string', // sentence-to-be-typed
    loseMessage: 'Lost ;(', // message sent when user misspell it
    time: 50000, // time that user has in ms
    startMessage: 'Good Luck!' // message sent when user starts playing
});
game.start(); // start da game
    }
}