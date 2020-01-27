const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'DibsOnDinnerPhotos',
});

db.connect(
  console.log('connected'),
);

module.exports = db;
// {id: id}

module.exports = {
  gather: (restId, callback) => {
    const queryStr = `SELECT * FROM photos WHERE restaurant_id = ${restId}`;

    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
};
