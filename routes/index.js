const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Amelia Brunst');
});

module.exports = routes;