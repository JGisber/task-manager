const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mpixel', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('connected', () => {
    console.log('Connected to MongoDB');
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

db.on('error', (error) => {
    console.log('MongoDB connection error', error);
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log('MongoDB connection closed due to process termination');
        process.exit(0);
    });
});

module.exports = db;