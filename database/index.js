const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'DibsOnDinnerPhotos'
});

connection.connect();

module.exports = {
  gather: function (callback) {
    var queryStr = 'SELECT * FROM photos';

    connection.query(queryStr, function (err, results) {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  }
}