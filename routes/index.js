var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
	res.send("Hello You!\n Our API with a parameter is at /name/:name (replace ':name' with your name)\n\n");
  // res.render('index', { title: 'Express' });
});

// /api?q=265bdbd0:%20what%20is%202%20plus%206
router.get('/api', function(req, res) {
	var query = req.query.q;
	query.replace('%20', ' ');
	var re = /.*: what is (\d+) ([\S\s]+) (\d+)/;
	var matches = re.exec(query);
	if (matches) {
		var result = "no";
		if (matches[2] == "plus") {
			result = parseInt(matches[1]) + parseInt(matches[3]);
		} else if (matches[2] == "minus") {
			result = parseInt(matches[1]) - parseInt(matches[3]);
		}
		// var result = calculator.add(parseInt(matches[1]), parseInt(matches[3]))
		res.send(String(result));
	}
	re = /([0-9]+)(,[0-9]+)*/g;
	matches = re.exec(query);
	if (matches && query.indexOf("what of the following is the largest") > -1) {
		var result = Math.max.apply(null, matches.splice(1, matches.length).map(Number));
		console.log("got here");
		res.send(result);
	}
	
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
