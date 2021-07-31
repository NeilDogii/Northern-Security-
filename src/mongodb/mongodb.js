const mongoose = require('mongoose');
const config = require("/root/bot/config.json")
const Schema = new mongoose.Schema({
    userid: {
      type: Number,
      default: null
    },
    whobanned: {
      type: String,
      default: "Failed to trace"
    }
});

mongoose.connect(config.mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
.catch(err => console.log(err))



let gbd
try {
    gbd = mongoose.model('globalban')
} catch (error) {
    gbd = mongoose.model('globalban', Schema)
}

exports.client = {
  db: gbd
}
