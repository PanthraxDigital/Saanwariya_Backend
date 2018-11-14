/* eslint-disable indent */
/* eslint-disable no-unused-vars */
var keystone = require('keystone');
var Contact = keystone.list('Contact');

exports.create = function (req, res) {
	// eslint-disable-next-line one-var
	var item = new Contact.model(),
		data = req.method === 'POST' ? req.body : req.query;

	item.getUpdateHandler(req).process(data, function (err) {
		if (err) return res.json({ error: err });

		res.json({
			result: 'success',
		});
	});
};

// exports.list = function (req, res) {
// 	Contact.model.find(function (err, items) {
// 		if (err) return res.json({ err: err });

// 		res.json({
// 			people: items,
// 		});
// 	});
// };
