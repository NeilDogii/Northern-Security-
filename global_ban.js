const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(`mongodb+srv://bot:Hihi777!@cluster0.8xyeg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/globalban/datas', (req, res) => {
  res.send("ok!")
});

app.listen(8888, () => console.log('Listening...'));