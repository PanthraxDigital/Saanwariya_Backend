/* eslint-disable comma-spacing */
var keystone = require('keystone');
var Types = keystone.Field.Types;

var BookNow = new keystone.List('BookNow',{
	nocreate: true,
	perPage: 50,
});

BookNow.add({
	phone: { type: String },
	checkIn: { type: String },
	checkout: { type: String },
	adult: { type: String },
	child: { type: String },
});

BookNow.register();
