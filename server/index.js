const express = require('express');
const app = express();
const db = require('../database/index.js');

app.use(express.static('./public'));

app.listen(3000, () => {
  console.log('Listening on port 3000');
})

app.get('/api/photos/1', function (req, res){
  db.gather((err, results) => {
    if(err) {
      console.log('error in app.get', err);
    } else {
      res.send(results);
    }
  });
});
