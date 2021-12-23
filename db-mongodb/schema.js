const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  Name: String,
  Salary: Number
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;