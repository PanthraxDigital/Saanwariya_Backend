/* eslint-disable indent */
/* eslint-disable no-unused-vars */
var keystone = require('keystone');
var BookNow = keystone.list('BookNow');

exports.create = function (req, res) {

	// eslint-disable-next-line one-var
	var item = new BookNow.model(),
		data = (req.method === 'POST') ? req.body : req.query;

	item.getUpdateHandler(req).process(data, function (err) {

		if (err) return res.json({ error: err });

		res.json({
			result: item,
		});

	});
};

exports.list = function (req, res) {
	BookNow.model.find(function (err, items) {

	if (err) return res.json({ err: err });

	res.json({
		people: items,
	});

	});
};
