const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/DevNest');

module.exports = mongoose.connection;

// 'mongodb+srv://elisse:AgFL8HGoAwIhCB1H@bookstore.jml8r.mongodb.net/bookstore?retryWrites=true&w=majority&appName=bookstore'