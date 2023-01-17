const express = require('express');
const app = express();
const con = require('./database');
const cors = require('cors')
const bcrypt = require('bcrypt');
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session);

// use cors midlware to allow server request from other origin
app.use(cors({
        origin: ['http://localhost:5173'],
        methods: ["GET", "POST"],
        credentials: true
    }))
    // creating a  session 
const sessionStore = new MySQLStore({
    createDatabaseTable: true,
    schema: {
        tableName: 'user_sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    },
}, con)
app.use(session({
    key: "pms",
    secret: "mySceret",
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 86000000
    }

}))


// use urlencoded midlware to get data from the body of the page 
app.use(express.urlencoded({ extended: false }));
// use json midlware is used to change josn data from api to object 
app.use(express.json());
app.post('/login', (req, res) => {
    const { Email, password } = req.body;
    const sql = `SELECT * FROM USER WHERE Email = '${Email}' `;
    con.query(sql, (err, data) => {
        if (err) throw err;
        if (data) {
            bcrypt.compare(password, data[0].password, (error, result) => {
                if (result) {
                    req.session.user = data;
                    res.send(req.session.user);
                    console.log("your password is succsseful")
                } else {
                    res.send({ message: " i am sorry man" })
                    console.log(" wrong password and email combnation");
                }
            })
        } else {
            console.log("user doesnt exist ")
        }
    })
})
app.listen(5000)