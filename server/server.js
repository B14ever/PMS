const express = require('express');
const app = express();
const con = require('./database');
const cors = require('cors')
const bcrypt = require('bcrypt');
const session = require('express-session')
    // use cors midlware to allow server request from other origin
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ["GET", "POST"],
    credentials: true
}))
app.use(session({
        secret: "mySceret",
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 1000 * 60 * 60 * 24 },
    }))
    // use urlencoded midlware to get data from the body of the page 
app.use(express.urlencoded({ extended: false }));
// use json midlware is used to change josn data from api to object 
app.use(express.json());
app.post('/registor', async(req, res) => {
    const { Email, password } = req.body;
    console.log(req.body)
        // hash password 
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = `INSERT INTO user (Email , password) VALUES ('${Email}','${hashedPassword}') `
        con.query(sql, (err) => {
            if (err) throw err;
        })
    } catch {
        console.log(err)
    }
})
app.post("/muker", (req, res) => {
    console.log(req.sessionID);
    const { username, password } = req.body;
    if (username && password) {
        console.log(username, password)
    }
})
app.post('/login', (req, res) => {
    console.log(req.body)
    const { Email, password } = req.body;
    const sql = `SELECT * FROM USER WHERE Email = '${Email}' `;
    con.query(sql, (err, data) => {
        if (err) throw err;
        if (data.length > 0) {
            const check = bcrypt.compare(password, data[0].password, (error, result) => {
                if (error) throw err;
                if (result) {
                    console.log("your password is succsseful")
                    res.status(200).send(data);
                } else {
                    console.log(" wrong password and email combnation");
                    res.send({ message: " i am sorry man" })
                }
            })
        } else {
            console.log("user doesnt exist ")
        }
    })
})
app.listen(5000)