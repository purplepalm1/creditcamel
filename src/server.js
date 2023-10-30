
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Purpleroot1123',
    database: 'creditcamel'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL database connected!');
});



app.post('/submit-form', (req, res) => {
    const { firstname, lastname, age, occupation, email } = req.body;
    const sql = 'INSERT INTO user_info (firstname, lastname, age, occupation, email) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [firstname, lastname, age, occupation, email], (err, result) => {
        if (err) throw err;
        console.log('Form data inserted into the database.');
        res.send('Form data inserted into the database.');
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


