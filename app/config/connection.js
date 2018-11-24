// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: "192.168.1.240",
    port: 3306,
    user: "myroot",
    password: "myroot",
    database: "burger_db"
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
