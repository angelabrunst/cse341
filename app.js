const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5500;

app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/', require('./routes'));

// eslint-disable-next-line no-unused-vars
mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});