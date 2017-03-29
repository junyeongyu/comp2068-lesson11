let express = require('express');
let router = express.Router();

// link to the book model for CRUD
let Book = require('../models/book');

router.get('/', function (req, res, next) {
	Book.find(function (err, books) {
		if (err) {
			return res.send(err).status(501);
		}
		
		// just send josn response, no need to call any view
		res.json(books);
	});
});

module.exports = router;