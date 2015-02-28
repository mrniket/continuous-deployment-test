var request = require("supertest");
var app = require("../app");

describe("a simple test suite", function() {
	it("/name/Niket should repond with 'Hello Niket!'", function(done) {
		request(app)
			.get("/name/Niket")
			.expect(200)
			.end(function (err, response) {
				expect(err).toBeFalsy();
				expect(response.text).toBe("Hello Niket!\n\n");
				done();
			});
	});
});