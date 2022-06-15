const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.createContact);

router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

// eslint-disable-next-line no-undef
module.exports = router;