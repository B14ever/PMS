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
    const sql = `SELECT * FROM users WHERE Email = '${Email}' `;
    con.query(sql, (err, data) => {
        if (data.length == 0) {
            console.log("user doesnt exist ")
            res.send({ userERR: "user doesnt exsit" })
        } else {
            bcrypt.compare(password, data[0].Password, (error, result) => {
                if (result) {
                    req.session.user = data;
                    console.log("your password is succsseful")
                    res.send(req.session.user);
                } else {
                    res.send({ passERR: "wrong password" });
                    console.log(" wrong password and email combnation");
                }
            })
        }
    })
})
app.get('/getTotalEmploye', (req, res) => {
    const sql = `SELECT COUNT(*) AS Employee FROM employee `;
    con.query(sql, (err, data) => {
        res.send(data);
    })
})
app.get('/getdepartment', (req, res) => {
    const sql = `SELECT COUNT(*) AS Department from departments`;
    con.query(sql, (err, data) => {
        res.send(data);
    })
})
app.get('/getEmployes', async(req, res) => {
    const sql = `SELECT * FROM employee ORDER BY ID`;
    con.query(sql, (err, data) => {
        res.send(data)
    })
})
app.listen(5000)