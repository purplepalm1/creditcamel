
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
    const {
        firstname,
        lastname,
        age,
        occupation,
        email,
        annualincome,
        numbankaccounts,
        numcreditcards,
        numloans
    } = req.body;

    const sql = 'INSERT INTO user_info (firstname, lastname, age, occupation, email, annualincome, Num_Bank_Accounts, Num_Credit_Card, Num_of_Loan) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

    db.query(sql, [firstname, lastname, age, occupation, email, annualincome, numbankaccounts, numcreditcards, numloans], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        console.log('Form data inserted into the database.');
        res.status(200).send('Form data inserted into the database.');
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});






