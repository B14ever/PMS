const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "pms_db",
});
con.connect((err) => {
  if (err) throw err;
  console.log("connected");
});
module.exports = con;
//b14ever
