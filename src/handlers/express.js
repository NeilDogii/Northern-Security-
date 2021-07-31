const express = require('express');
const app = express();

app.listen(8888, () => console.log('Listening... to the port ' + 8888));

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