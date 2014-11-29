
'use strict';

var path = require('path'),
	express = require('express'),
	version = require('express-version');

module.exports = function create() {

	// Create new instance.
	var app = express();

	// Install app routes
	app.use(version(path.join(__dirname, '..')));
	// ...

	// Done!
	return app;
};
