const db = require('../db-mongodb');
const Entry = require('../db-mongodb/schema.js');

var controllers = {
  get: function (req, res) {
    var smallest = req.params.id;
    if (smallest === 'null') {
      Entry.find().limit(50).sort({"_id": -1}).then((result) => {
        console.log(result);
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
  },

  getRecordCount: function (req,res) {
    Entry.count().then((result) => {
      var jsonResult = JSON.stringify(result);
      res.status(200).send(jsonResult);
    }).catch((err) => {
      console.log(err);
      res.status(500).send(err);
    })
  },

  getTrimmedAverage: function (req, res) {
    Entry.aggregate([{
        $group:
        {
          "_id": "_id",
           AverageValue: { $avg: "$Salary" }
        }
    }]).then((result) => {
      console.log(result);
      res.status(200).send(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).send(err);
    })
  },

  post: function(req, res) {
    var entry = req.body;

    Entry.create(entry).then(() => {
      console.log(`${entry.Name} added with a value of ${entry.Salary}`)
      res.status(200).send(`${entry.Name} added with a value of ${entry.Salary}`);
    }).catch((err) => {
      console.log(err);
      res.status(400).send(err);
    })
  }
}


module.exports = controllers;