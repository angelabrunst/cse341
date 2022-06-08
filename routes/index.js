const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Hello, Amelia Brunst');
});

module.exports = routes;