const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Database
const db = require('./config/database');

// Test db
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log(err));

const app = express();

app.get('/', (req, res) => res.send("Sahibinden.com cars clone app project"));

// users routes
app.use('/users', require('./routes/users'));

// products routes
app.use('/products', require('./routes/products'));

// messages routes
app.use('/messages', require('./routes/messages'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port : ${PORT} to go click here http://localhost:${PORT}/`));