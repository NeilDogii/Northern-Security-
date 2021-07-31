const Discord = require("discord.js")
const client = require("../../index").client
const gbd = require("/root/bot/src/mongodb/mongodb").gdb

const fs = require("fs-extra")
const config = require("/root/bot/config.json")

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./src/commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    client.commands.set(command.name, command);
  }

  client.on("message", message =>{  
    if(message.author.bot) return;
    if (
        !message.content.toLowerCase().startsWith(config.prefix) ||
        message.author.bot ||
        message.content.toLowerCase().startsWith(config.prefix + " ")
      )              
        return;

        let args = message.content
        .slice(config.prefix.length)
        .trim()
        .split(" ");

      const commandName = args.shift().toLowerCase();

      const command =
        client.commands.get(commandName) ||
        client.commands.find(
          cmd => cmd.aliases && cmd.aliases.includes(commandName)
        );

        if (!command) return;

      if(command.guildOnly && message.channel.type !== "text") return;
      if(command.ownerOnly && message.author.id !== "430964083160776705") return;
      if(command.adminOnly && !message.member.hasPermission("ADMINISTRATOR")) return;
      let prefix = config.prefix;

      try {
        command.code(client, message, args, prefix, gdb);
       
      } catch (err) {
        console.log(err);
      }

})