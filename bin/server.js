
'use strict';

var path = require('path'),
	http = require('http'),
	myapp = require(path.join(__dirname, '..'));

// Create new instance of myapp.
var app = myapp({
	env: process.env['NODE_ENV'] || 'development'
});

// Launch.
http.createServer(app).listen(process.env.PORT);
