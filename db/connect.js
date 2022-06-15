const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

let _db;

const initDb = (callback) => {
    if (_db) {
        console.log('Db is already initialized!');
        return callback(null, _db);
    }
    MongoClient.connect(process.env.MONGODB_URI)
        .then((client) => {
            _db = client;
            callback(null, _db);
        })
        .catch((err) => {
            callback(err);
        });
};

const getDb = () => {
    if (!_db) {
        throw Error('Db not initialized');
    }
    return _db;
};

module.exports = {
    initDb,
    getDb,
};





// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const contactSchema = new Schema({
//     firstName: {
//         type: String,
//         require: true,
//         unique: false
//     },
//     lastName: {
//         type: String,
//         require: true,
//         unique: false
//     },
//     email: {
//         type: String,
//         require: true,
//         unique: false
//     },
//     favoriteColor: {
//         type: String,
//         require: true,
//         unique: false
//     },
//     birthday: {
//         type: String,
//         require: true,
//         unique: false
//     }
// })

// const Contact = mongoose.model('contact', contactSchema);

// module.exports = Contact;