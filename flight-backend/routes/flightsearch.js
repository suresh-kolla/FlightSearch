var express = require("express");
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;

router.get("/", function (req, res, next) {
  console.log(req);
  MongoClient.connect(
    "mongodb://localhost:27017/animals",
    function (err, client) {
      if (err) throw err;

      var db = client.db("flightData");

      db.collection("flight")
        .find({
          $and: [
            { Source_city: req.query.Source_city },
            { Destination_city: req.query.Destination_city },
          ],
        })
        .toArray(function (err, result) {
          if (err) throw err;

          res.send(result);
        });
    }
  );
});

module.exports = router;
