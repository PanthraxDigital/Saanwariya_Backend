var keystone = require('keystone');

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

Contact.defaultColumns = 'name, email, phone, subject, message';
Contact.register();
