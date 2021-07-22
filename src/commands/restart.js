module.exports = {
    name: "restart", 
  
    code(client, message, args, prefix) {
      if(message.author.id != "430964083160776705") return;
      require('child_process').exec("/root/bot/restart.bat", function (err, stdout, stderr) {
          if (err) {
              return console.log(err);
          }
          console.log(stdout);
          console.log("Done!")
          message.reply(stdout)
      });
    }
  }