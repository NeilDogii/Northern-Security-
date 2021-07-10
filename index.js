const {Client, Discord} = require("discord.js")
const client = new Client();
const config = require("./config.json")
require(functions)(client)
client.login(config.token)

module.export = {
    client: client,
    Discord: Discord
}