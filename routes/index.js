var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	api: importRoutes('./api'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	// app.get('/', routes.views.index);
	app.all('/api*', keystone.middleware.cors);

	// Book Now
	app.post('/api/BookNow', routes.api.BookNow.create);
	app.get('/api/BookNow', routes.api.BookNow.list);

	// Contact
	app.post('/api/Contact', routes.api.Contact.create);
	app.get('/api/Contact', routes.api.Contact.list);

};
