require('dotenv').config({ debug: true });

const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
const asyncHandler = require('express-async-handler');

const { sequelize } = require('./models/index');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => console.log(err));

process.env.NODE_ENV == 'dev' && app.use(morgan('tiny'));

app.get(
    '/',
    asyncHandler(async (req, res) => {
        console.log(await sequelize.models.Owner.findAll());
        res.send('hello world');
    })
);

const port = process.env.PORT;

app.listen(port, console.log(`Server Running on port ${port}`));
