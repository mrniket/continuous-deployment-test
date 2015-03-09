var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
	res.send("Hello You!\n Our API with a parameter is at /name/:name (replace ':name' with your name)\n\n");
  // res.render('index', { title: 'Express' });
});

router.get('/api?q=265bdbd0:%20what%20is%202%20plus%206', function(req, res) {
	res.send('8');
});

router.get('/api', function(req, res) {
	var name = req.query.q;
	res.send(name);
});

router.get('/name/:name', function(req, res) {
	res.send("Hello " + req.params.name + "!\n\n");
  // res.render('index', { title: 'Express' });
});

router.get('/name/bye/:name', function(req, res) {
	res.send("Bye " + req.params.name + "!\n\n");
  // res.render('index', { title: 'Express' });
});

module.exports = router;
