// Uncomment after adding newrelic service
// require('newrelic');

var config = require('config');

// Extend the environment to support `.jsx` and `.es6`, stubs `.less`.
require('./server/bridge/transpilers');

// Run the app server
require('./server/main');
