const talkedRecently = new Set();

module.exports = {
  name: "ping",
  aliases: ["pong", "p"],
 

  code(client, message, args, prefix) {
      message.reply("pong :>")
  }
}
