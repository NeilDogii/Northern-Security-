const Discord = require("discord.js")
const axios = require('axios');

module.exports = {
  name: "removegb",

  code(client, message, args, prefix, db) {
    let embed = new Discord.MessageEmbed()

    if (message.author.id !== "302441957626609664" && message.author.id !== "539395263257903104" && message.author.id !== "424639704122654731") {
      embed.setColor("RED")
      embed.setDescription("**Failed** - You Don't Have Permission")
      return message.channel.send({ embeds: [embed] })
    }

    if (!args[0]) {
      embed.setColor("RED")
      embed.setDescription("**Failed** - Missing UserId")
      return message.channel.send({ embeds: [embed] })
    }

    axios.get(`https://users.roblox.com/v1/users/${args[0]}`)
      .then(function (response) {
        db.findOneAndDelete({
          userid: args[0],
        }, (err, data) => {
          if (err) console.log(err)
          if (data) {
            embed.setColor("GREEN")
            embed.setDescription(`**Removed** - ${response.data.name} (${args[0]}) from the ban list`)
            return message.channel.send({ embeds: [embed] })
          } else {
            embed.setColor("RED")
            embed.setDescription(`**Failed** - Can't find user in ban list`)
            return message.channel.send({ embeds: [embed] })
          }
        })
      })
      .catch(function (error) {
          // handle error      
          embed.setColor("RED")
          embed.setDescription(`**Failed** - Invalid UserId (${args[0]})`)
          return message.channel.send({ embeds: [embed] })
      })
  }
}
