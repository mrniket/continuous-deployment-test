var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
	var name = req.
	res.send("Hello You!\n\n");
  // res.render('index', { title: 'Express' });
});

router.get('/name/:name', function(req, res) {
	res.send("Hello " + req.params.name + "!\n\n");
  // res.render('index', { title: 'Express' });
});

module.exports = router;
