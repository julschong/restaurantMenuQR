const express = require('express');
const morgan = require('morgan');

const app = express();

process.env.NODE_ENV == 'dev' && app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('hello world');
});

const port = 3003;

app.listen(port, console.log(`Server Running on port ${port}`));
