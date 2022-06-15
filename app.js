const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
// const Contact = require('./db/connect');
// require('dotenv').config();

const app = express();
// app.use(express.json());

const port = process.env.PORT || 5500;
// const uri = process.env.MONGODB_URI;


// //GET All & Single Contacts
// app.use(bodyParser.json());
// app.get('/', async(req, res) => {
//         const dbConnection = await Contact.find({});
//         res.setHeader('Content-Type', 'application/json');
//         res.send(dbConnection);
//     })
//     .get('/:id', async(req, res) => {
//         const userId = new ObjectId(req.params.id);
//         const dbConnection = await Contact.find({ _id: userId });
//         res.setHeader('Content-Type', 'application/json');
//         res.send(dbConnection);
//     });

app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});

// mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// //Post New Contact
// app.post('/contact', async(req, res) => {
//     try {
//         console.log("req.body: ", req.body);

//         const newContact = new Contact({
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             email: req.body.email,
//             favoriteColor: req.body.favoriteColor,
//             birthday: req.body.birthday
//         })

//         await Contact.create(newContact);

//         res.send("Contact added");

//     } catch (err) {
//         console.log("error: ", err);
//     }
// })

// app.listen(port, () => {
//     console.log(`Listening on ${port}`)
// })