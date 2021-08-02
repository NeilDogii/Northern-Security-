const Discord = require("discord.js")

module.exports = {
  name: "addgb",

  code(client, message, args, prefix, db) {
    let embed = new Discord.MessageEmbed()

    if (message.author.id !== "302441957626609664" && message.author.id !== "539395263257903104" && message.author.id !== "424639704122654731") {
      embed.setColor("RED")
      embed.setDescription("**Failed** - You Don't Have Permission")
<<<<<<< HEAD
      return message.channel.send({embeds: [embed]})
=======
      return message.channel.send({embed: [embed]})
>>>>>>> e2811996f42239fb5176a358fdc05e6d54217819
    }
    
    if (!args[0]) return message.reply("Missing UserId")

    db.findOne({
      userid: args[0],
    }, (err, data) => {
      if (err) console.log(err)
      if (data) {
        embed.setColor("RED")
        embed.setDescription('**Failed** - Already in database')
<<<<<<< HEAD
        return message.channel.send({embeds: [embed]})
=======
        return message.channel.send({embed: [embed]})
>>>>>>> e2811996f42239fb5176a358fdc05e6d54217819
      } else {
        let newd = new db({
          userid: args[0],
          whobanned: message.author.tag
        })
        newd.save().catch(err => console.log(err));
        embed.setColor("GREEN")
        embed.setDescription('Done!')
<<<<<<< HEAD
        return message.channel.send({embeds: [embed]})
=======
        return message.channel.send({embed: [embed]})
>>>>>>> e2811996f42239fb5176a358fdc05e6d54217819
      }
    })
  }
}
