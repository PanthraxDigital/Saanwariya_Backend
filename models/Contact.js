var keystone = require('keystone');
var Types = keystone.Field.Types;

var Contact = new keystone.List('Contact', {
	nocreate: true,
	perPage: 50,
});


Contact.add({
	name: { type: String },
	email: { type: String },
	phone: { type: String },
	subject: { type: String },
	message: { type: String },
});

Contact.register();
