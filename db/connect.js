const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    firstName: {
        type: String,
        require: true,
        unique: false
    },
    lastName: {
        type: String,
        require: true,
        unique: false
    },
    email: {
        type: String,
        require: true,
        unique: false
    },
    favoriteColor: {
        type: String,
        require: true,
        unique: false
    },
    birthday: {
        type: String,
        require: true,
        unique: false
    }
})

const Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;