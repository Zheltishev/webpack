const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 8081;
const app = express();
const MongoClient = require('mongodb').MongoClient;
const mongodbURL = 'mongodb://localhost:27017';
const client = new MongoClient(mongodbURL);
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mongodb = require('mongodb');

const start = async () => {
    try {
        await client.connect();
    } catch (err) {
        console.error(err);
    }
};

start();

app.listen(PORT, () => {
    console.log('Server has been started, port ', PORT);
});
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: `server works!`,
    });
});
