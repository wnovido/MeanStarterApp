/**
 * Created by wilso_000 on 11/17/2014.
 */
//grab the nerd model we just created
var Nerd = require('./models/nerd');

module.exports = function(app) {
	// server routes
	// handle things like api calls
	// authentication routes

	//sample api
	app.get('/api/nerds', function(req, res) {
		// use mongoose to get all nerds in the database
		Nerd.find(function(err, nerds) {
			if (err) //if there is an error retrieving, send error
				res.send(err);

			res.json(nerds);
		});
	});

	// route to handle creating goes here (app.post)
	// route to handle delete goes here (app.delete)

	// frontend routes
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html'); // load our public/index.html file
	});
};



