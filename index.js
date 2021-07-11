const {Client, Discord, Intents} = require("discord.js")
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require("./config.json")

require("./functions")(client)

exports.client = client;

client.login(config.token)