var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([
  {
  	id: 1,
  	username: "samsepi0l"
  }, {
  	id: 2,
  	username: "D0loresH4ze"
  },
  {
  	id: 3,
  	username: "samsepi0l"
  }, {
  	id: 4,
  	username: "D0loresH4ze"
  },
  {
  	id: 5,
  	username: "samsepi0l"
  }, {
  	id: 6,
  	username: "D0loresH4ze"
  },
  {
  	id: 7,
  	username: "samsepi0l"
  }, {
  	id: 8,
  	username: "D0loresH4ze"
  }
  ]);
});

module.exports = router;