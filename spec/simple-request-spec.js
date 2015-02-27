var request = require('request');

describe("a simple test suite", function() {
	it("should repond with 'Hello Niket!'", function(done) {
		request("http://circlehost:3000/name/Niket", function(error, response, body) {
			console.log(error);
			console.log("request: " + JSON.stringify(response));
			expect(body).toEqual("Hello Niket!\n\n");
			done();
		});
	});
});