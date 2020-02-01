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
