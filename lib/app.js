
'use strict';

var path = require('path'),
	express = require('express'),
	version = require('express-version'),
	smile = require('./smiley');

module.exports = function create() {

	// Create new instance.
	var app = express();

	// Install app routes
	app.use(version(path.join(__dirname, '..')));
	app.get('/', smile({ smile: ':D' }));

	// Done!
	return app;
};
