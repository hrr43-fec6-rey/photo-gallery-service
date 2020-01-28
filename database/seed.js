const pics = require('./dummy_data.js');

const db = require('../database/index.js');

const generate = () => {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < pics.length; j += 1) {
      db.query(`INSERT INTO photos (image, restaurant_id) VALUES ( '${pics[j]}' , ${i})`, (err, result) => {
        if (err) {
          console.log('there was an error', err);
        } else {
          console.log('record written', result);
        }
      });
    }
  }
};

generate();
