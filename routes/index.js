const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts'))

// eslint-disable-next-line no-undef
module.exports = router;