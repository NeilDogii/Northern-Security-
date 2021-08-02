const Discord = require("discord.js")
const axios = require('axios');

module.exports = {
  name: "addgb",

  code(client, message, args, prefix, db) {
    let embed = new Discord.MessageEmbed()

    if (message.author.id !== "302441957626609664" && message.author.id !== "539395263257903104" && message.author.id !== "424639704122654731" && message.author.id !== "430964083160776705") {
      embed.setColor("RED")
      embed.setDescription("**Failed** - You Don't Have Permission")
      return message.channel.send({ embeds: [embed] })
    }

    if (!args[0]) return message.reply("Missing UserId")

    axios.get('https://users.roblox.com/v1/users/' + args[0])
      .then(function (response) {
        console.log(response)
        db.findOne({
          userid: args[0],
        }, (err, data) => {
          if (err) console.log(err)
          if (data) {
            embed.setColor("RED")
            embed.setDescription(`**Failed** - ${response.data.name} is already in database`)
            return message.channel.send({ embeds: [embed] })
          } else {
            let newd = new db({
              userid: args[0],
              whobanned: message.author.tag
            })
            newd.save().catch(err => console.log(err));
            embed.setColor("GREEN")
            embed.setDescription('Banned ' + response.data.name)
            return message.channel.send({ embeds: [embed] })
          }
        })
      })
      .catch(function (error) {
        // handle error      
        embed.setColor("RED")
        embed.setDescription("**Failed** - Invalid ID")
        return message.channel.send({ embeds: [embed] })
      })
  }
}
