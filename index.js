var time = require('time');
exports.handler = function(event, context, callback) {
	var currentTime = new time.Date();
	currentTime.setTimezone("America/Los_Angeles");
	callback(null, {
		statusCode: '200',
		body: 'The time in Los Angeles is: ' + currentTime.toString()
	});
};
