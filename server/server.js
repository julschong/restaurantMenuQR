require('dotenv').config({ debug: true });

const express = require('express');
const morgan = require('morgan');
const sequelize = require('./db/config');

const app = express();

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => console.log(err));

process.env.NODE_ENV == 'dev' && app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('hello world');
});

const port = process.env.PORT;

app.listen(port, console.log(`Server Running on port ${port}`));
