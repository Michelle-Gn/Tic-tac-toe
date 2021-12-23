const db = require('../db-mongodb');
const Entry = require('../db-mongodb/schema.js');

var controllers = {
  get: function (req, res) {
    var smallest = req.params.id;
    if (smallest === 'null') {
      Entry.find().limit(50).sort({"_id": -1}).then((result) => {
        res.status(200).send(result);
      }).catch((err) => {
        res.status(500).send(err);
      })
    } else {
      Entry.find({_id: {"$lt" : smallest}}).limit(50).sort({"_id": -1}).then((result) => {
        res.status(200).send(result);
      }).catch((err) => {
        res.status(500).send(err);
      })
    }
  }
}


module.exports = controllers;