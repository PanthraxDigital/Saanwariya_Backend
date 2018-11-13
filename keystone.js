/* eslint-disable comma-dangle */
/* eslint-disable key-spacing */
// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');
var handlebars = require('express-handlebars');

keystone.init({
	'name': 'Saanwariya Hospitality Admin Panel',
	'brand': 'Saanwariya Hospitality Admin Panel',
	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': '.hbs',
	'port' : '4004',
	'cookie secret': 'e6f367201256d6b6959f222754a4ab27',
	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: new require('./templates/views/helpers')(),
		extname: '.hbs',
	}).engine,

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
});
keystone.import('models');
keystone.set('cors allow origin', true);
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});
keystone.set('routes', require('./routes'));
keystone.set('signin logo', '../PDA_logo.png');

keystone.set('nav', {
	users: 'users',
	BookNow : 'BookNow',
	Contact : 'Contact'
});

keystone.start();
