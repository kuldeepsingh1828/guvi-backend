var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ response: "Hi Dear it's working" })
});

module.exports = router;
