const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "b14ever",
    database: "pms_db"
});
con.connect(err => {
    if (err) throw err;
    console.log("connected")
});
module.exports = con;