var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/tracer';

mongoose.connect(mongoUri);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected!')
});


module.exports = db;