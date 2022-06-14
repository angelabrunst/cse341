const express = require('express');
const mongoose = require('mongoose');
const Contact = require('../db/connect');
const ObjectId = require('mongoose').ObjectId;

const getAll = async(req, res, next) => {
    const result = await Contact.find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const getSingle = async(req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await Contact
        .find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

module.exports = { getAll, getSingle };