var request = require("supertest");
var app = require("../app");

describe("a simple test suite", function() {
	// it("/name/Niket should repond with 'Hello Niket!'", function(done) {
	// 	request(app)
	// 		.get("/name/Niket")
	// 		.expect(200)
	// 		.end(function (err, response) {
	// 			expect(err).toBeFalsy();
	// 			expect(response.text).toBe("Hello Niket!\n\n");
	// 			done();
	// 		});
	// });

	// it("/name/bye/Tom should repond with 'Bye Tom!'", function(done) {
	// 	request(app)
	// 		.get("/name/bye/Tom")
	// 		.expect(200)
	// 		.end(function (err, response) {
	// 			expect(err).toBeFalsy();
	// 			expect(response.text).toBe("Bye Tom!\n\n");
	// 			done();
	// 		});
	// });

	
	// it("/api?q=265bdbd0:%20what%20is%202%20plus%206 should respond with 8", function(done) {
	// 	request(app)
	// 		.get("/api?q=265bdbd0:%20what%20is%202%20plus%206")
	// 		.expect(200)
	// 		.end(function (err, response) {
	// 			expect(err).toBeFalsy();
	// 			expect(response.text).toBe("8");
	// 			done();
	// 		});
	// });


	// it("/api?q=b84a49b0:%20which%20of%20the%20following%20numbers%20is%20the%20largest:%2068,%20886 should respond with 886", function(done) {
	// 	request(app)
	// 		.get("/api?q=b84a49b0:%20which%20of%20the%20following%20numbers%20is%20the%20largest:%2068,%20886")
	// 		.expect(200)
	// 		.end(function (err, response) {
	// 			expect(err).toBeFalsy();
	// 			expect(response.text).toBe("886");
	// 			done();
	// 		});
	// });
});

