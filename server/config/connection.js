const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://elisse:AgFL8HGoAwIhCB1H@bookstore.jml8r.mongodb.net/bookstore?retryWrites=true&w=majority&appName=bookstore');

module.exports = mongoose.connection;
