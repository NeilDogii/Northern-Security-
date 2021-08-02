const talkedRecently = new Set();

module.exports = {
  name: "ping",
  aliases: ["p"],
 
  code(client, message, args, prefix) {
      message.channel.send("Pinging...").then(m => m.edit(`Pong! ${m.createdTimestamp - message.createdTimestamp}ms`))
  }
}
