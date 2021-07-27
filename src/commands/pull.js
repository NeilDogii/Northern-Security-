module.exports = {
  name: "pull", 

  code(client, message, args, prefix) {
      if(message.author.id != "430964083160776705" && message.author.id != "539395263257903104" && message.author.id != "424639704122654731") return;
    require('child_process').exec("/root/bot/pull.bat", function (err, stdout, stderr) {
        if (err) {
          message.member.send(err)
            return console.log(err);
        }
        console.log(stdout);
        console.log("Done!")
        message.reply(stdout)
    });
  }
}
