const express = require('express');

const app = express();
const cors = require('cors');
const db = require('../database/models.js');


app.use(cors());

app.use(express.static('./public'));

app.get('/api/photos/:restaurant_id', (req, res) => {
  db.gather(req.params.restaurant_id, (err, results) => {
    if (err) {
      console.log('error in app.get', err);
    } else {
      res.send(results);
    }
  });
});

module.exports = app;
