const Discord = require("discord.js")

module.exports = {
  name: "checkgb",

  code(client, message, args, prefix, db) {
    let embed = new Discord.MessageEmbed()

    if (message.author.id !== "302441957626609664" && message.author.id !== "539395263257903104") {
      embed.setColor("RED")
      embed.setDescription("**Failed** - You Don't Have Permission")
      return message.channel.send({embed: [embed]})
    }
    
    if (!args[0]) return message.reply("Missing UserId")

		db.findOne({
			userid: args[0]
		}, (err, data) => {
			if (err) console.log(err)
			if (data) {
        embed.setColor("GREEN")
        embed.setDescription([
					`**UserId:** ${data.userid}\n`,
					`**WhoBanned:** ${data.whobanned}`
				])
        return message.channel.send({embed: [embed]})
			} else {
        embed.setColor("RED")
        embed.setDescription("**Failed** Can't find user in database")
        return message.channel.send({embed: [embed]})
			}
		})
  }
}