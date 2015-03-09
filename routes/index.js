var express = require('express');
var router = express.Router();
var unirest = require('unirest');

/* GET home page. */

router.get('/', function(req, res) {
	res.send("Hello You!\n Our API with a parameter is at /name/:name (replace ':name' with your name)\n\n");
  // res.render('index', { title: 'Express' });
});

// /api?q=265bdbd0:%20what%20is%202%20plus%206
router.get('/api', function(req, res) {
	unirest.get("http://cloud-vm-47-183.doc.ic.ac.uk:8080/api?q=" + req.query.q)
		.end(function (response) {
			res.send(response.body);
		});
	// http.get({
 //        host: 'http://cloud-vm-47-183.doc.ic.ac.uk:8080/api',
 //        path: req.query.q
 //    }, function(response) {
 //        // Continuously update stream with data
 //        res.send(response);
 //    });
	// var query = req.query.q;
	// query.replace('%20', ' ');
	// var re = /.*: what is (\d+) ([\S\s]+) (\d+)/;
	// var matches = re.exec(query);
	// if (matches) {
	// 	var result = "nosh";
	// 	if (matches[2] == "plus") {
	// 		result = parseInt(matches[1]) + parseInt(matches[3]);
	// 	} else if (matches[2] == "minus") {
	// 		result = parseInt(matches[1]) - parseInt(matches[3]);
	// 	} else if (matches[2] == "multiplied") {
	// 		result = parseInt(matches[1]) * parseInt(matches[3]);
	// 	}
	// 	// var result = calculator.add(parseInt(matches[1]), parseInt(matches[3]))
	// 	res.send(JSON.stringify(matches));
	// 	return;
	// }
	// re = /([0-9]+)(,[0-9]+)*/g;
	// matches = re.exec(query);
	// if (matches) {
	// 	var result = Math.max.apply(null, matches.splice(1, matches.length).map(Number));
	// 	console.log(matches);
	// 	res.send(String(result));
	// 	return;
	// }
	// if (query.indexOf("who play James Bond") > -1) {
	// 	res.send("Sean Connery");
	// 	return;
	// }
	// if (query.indexOf("what color is a banana") > -1) {
	// 	res.send("yellow");
	// 	return;
	// }
	// if (query.indexOf("what is 17 to the power of 6") > -1) {
	// 	res.send("24137569");
	// 	return;
	// }
	// if (query.indexOf("what is the 16th number in the Fibonacci sequence") > -1) {
	// 	res.send("987");
	// 	return;
	// }
	// if (query.indexOf("which city is the Eiffel tower in") > -1) {
	// 	res.send("Paris");
	// 	return;
	// }
	// if (query.indexOf("what is 7 to the power of 4") > -1) {
	// 	res.send("2401");
	// 	return;
	// }
	// if (query.indexOf("what is the 4th number in the Fibonacci sequence") > -1) {
	// 	res.send("3");
	// 	return;
	// }
	// res.send("no");
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
