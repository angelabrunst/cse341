const express = require('express');
const mongoose = require('mongoose');
const Contact = require('./routes/contacts');
const ObjectId = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 5500;
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("cluster0").collection("Contacts");
    // perform actions on the collection object
    client.close();
});

// mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log("MongoDB connected successfully");
// })

//GET All Contacts
app.get('/contacts', async(req, res) => {
    const allContacts = await client.db("cluster0").collection("Contacts").find();
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log('Contacts from db: ', allContacts);
    res.send(allContacts);
});

//GET Single Contact
// app.get('/contacts/:id', async(req, res => {
//     const userId = new ObjectId(req.params.id);
//     const singleContact = await Contact
//         .db('cluster0')
//         .collection('Contacts')
//         .find({ _id: userId });
//     singleContact.toArray().then((lists) => {
//         res.setHeader('Content-Type', 'application/json');
//         res.status(200).json(lists[0]);
//     });
//     console.log('Contact from db: ', singleContacts);
//     res.send(singleContacts);
// }))

//Post New Contact
app.post('/contact', async(req, res) => {
    try {
        console.log("req.body: ", req.body);

        const newContact = new Contact({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        })

        await Contact.create(newContact);

        res.send("Contact added");

    } catch (err) {
        console.log("error: ", err);
    }
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})