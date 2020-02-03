const db = require('./index.js');

const generate = () => {
  for (let i = 1; i < 101; i += 1) {
    const numPhotos = Math.floor((Math.random() * 13) + 12);
    for (let j = 1; j < numPhotos; j += 1) {
      const randomNumber = Math.ceil(Math.random() * Math.floor(50));
      const url = `https://dibsondinner.s3-us-east-2.amazonaws.com/dibsondinnerresize/photo-${randomNumber}.jpg`;
      db.query(`INSERT INTO photos (image, restaurant_id) VALUES ( '${url}', ${i})`, (err, result) => {
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

module.exports = generate;
