var request = require('request');
var ip = require('ip');

describe("a simple test suite", function() {
	it("should repond with 'Hello Niket!'", function(done) {
		console.log(ip.address());
		request(ip.address() + ":3000/name/Niket", function(error, response, body) {
			console.log(error);
			console.log("request: " + JSON.stringify(response));
			expect(body).toEqual("Hello Niket!\n\n");
			done();
		});
	});
});