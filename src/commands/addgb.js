module.exports = {
  name: "addgb",

  code(client, message, args, prefix, db) {
    let embed = new Discord.MessageEmbed()

    if (message.author.id !== "302441957626609664" && message.author.id !== "539395263257903104") {
      embed.setColor("RED")
      embed.setDescription("**Failed** - You Don't Have Permission")
      return message.channel.send(embed)
    }
    
    if (!args[0]) return message.reply("Missing UserId")

    db.findOne({
      userid: args[0],
    }, (err, data) => {
      if (err) console.log(err)
      if (data) {
        embed.setColor("RED")
        embed.setDescription('**Failed** - Already in database')
        return message.channel.send(embed)
      } else {
        let newd = new db({
          userid: args[0],
          whobanned: message.author.tag
        })
        newd.save().catch(err => console.log(err));
        embed.setColor("GREEN")
        embed.setDescription('Done!')
        return message.channel.send(embed)
      }
    })
  }
}
