
'use strict';

/**
 * Make smiley middleware
 *
 * @param {Object} options Configuration options.
 * @returns {Function} Middleware.
 */
module.exports = function smilies(options) {
	return function smile(req, res) {
		res.status(200).send({ smile: options.smile });
	};
};
