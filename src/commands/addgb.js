module.exports = {
  name: "addgb",

  code(client, message, args, prefix, gbd) {
    if (message.author.id !== "302441957626609664" || message.author.id !== "539395263257903104") return message.reply("You Don't Have Permission")
    
//     if (!args[0]) return message.reply("Missing UserId")

    let newd = new gbd({
      userid: args[0],
      whobanned: message.author.tag
    })
    newd.save().catch(err => console.log(err));
    message.reply("Done")
  }
}
