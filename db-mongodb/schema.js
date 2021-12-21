const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  employee: String,
  salary: Number
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;