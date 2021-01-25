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
        .find()
        .toArray(function (err, result) {
          if (err) throw err;

          res.render("index", { List: result });
        });
    }
  );
});

module.exports = router;
