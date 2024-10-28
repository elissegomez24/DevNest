const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://aden:abc@devnest.powuk.mongodb.net/?retryWrites=true&w=majority&appName=DevNest');

module.exports = mongoose.connection;

// 'mongodb+srv://elisse:AgFL8HGoAwIhCB1H@bookstore.jml8r.mongodb.net/bookstore?retryWrites=true&w=majority&appName=bookstore');
