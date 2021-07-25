require('dotenv').config({ debug: true });
const http = require('http');
const app = require('./src/app');
const server = http.createServer(app);

const { sequelize } = require('./models/index');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => console.log(err));

const port = process.env.PORT;

server.listen(port, console.log(`Server Running on port ${port}`));
