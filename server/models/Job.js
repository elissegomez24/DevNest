const { Schema, model } = require('mongoose');

const jobSchema = new Schema({
  
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description:  { 
    type: String,
    required: true,
  },
  pay: {
    type: Number,
    required: true,
  }
  
});

const Job = model('Job', jobSchema);

module.exports = Job;
