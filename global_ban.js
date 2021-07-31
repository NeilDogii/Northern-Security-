const express = require('express');
const mongoose = require('mongoose');
const app = express();
const gbd = mongoose.model("globalban", mongoose.Schema({
  userid: Number,
  whobanned: String
}));

mongoose.connect(`mongodb+srv://bot:Hihi777!@cluster0.8xyeg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/globalban/check', (req, res) => {
  const { userid } = req.query;

  if (!userid) return res.json(false)
  gbd.findOne({

  }, (err, data) => {
    if (err) console.log(err)
    if (data) {
      return res.json(true)
    } else {
      return res.json(false)
    }
  })
});

app.listen(8888, () => console.log('Listening...'));