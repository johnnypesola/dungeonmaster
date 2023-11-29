// const { MongoClient } = require('mongodb');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connection URL
const mongoString = 'mongodb://localhost:27017/dungeon';

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

const routes = require('./routes/routes');

app.use('/api', routes)

