// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'signup',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + db.threadId);
});

// API endpoints
app.post('/login', (req, res) => {
  const { userId, password } = req.body;

  // Implement user login logic here
  // You might need to query the database to check if the user exists
  // and if the provided password is correct
});

app.post('/createList', (req, res) => {
  const { userId, title } = req.body;

  // Implement list creation logic and save to MySQL here
  // You need to insert a new list into the 'lists' table in the database
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
