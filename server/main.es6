// System
import path from 'path';

// Configuration
import config from 'config';

const APP = config.get('app');
const SERVER = config.get('server');

// Logging
import debug from 'debug';
const log = debug(`app:server:${APP.name}`);

// Express and middleware
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import csrf from 'csurf';
import favicon from 'serve-favicon';
import passport from 'passport';

// HTML rendering tools
import React from 'react';
import serialize from 'serialize-javascript';

//
// Equivalent to templates/layout.html,
// it will inject a rendered app, and serialized state
//
import Layout from './layout';

// Create server
const server = express();

// Set global parameters
server.set('state namespace', APP.name);

// Attach standard express middleware
server.use(compression());
server.use(bodyParser.json());
server.use(cookieParser());
server.use(csrf({cookie: true}));
server.use(favicon(__dirname + '/../public/favicon.ico'));
server.use('/public', express.static(path.resolve(__dirname, '../public')));

// Use passport for authentication
server.use(passport.initialize());

//
//  Render our fancy pants React app
//
server.use(
    // Render a snapshot of the app given the route, user, and config
    function renderAppInstance (req, res, next) {

    // Create the app state
    const exposedState = {
        config: {
            app: APP,
        }
    };

    // Renders current app state to HTML
    // Injects markup and state into layout
    let html = React.renderToStaticMarkup(
        React.createElement(Layout, {
            markup: 'Hello!',
            // Exposes current app state to client
            state: `window.App=${serialize(exposedState)};`
        })
    );

    // Sends it on its way
    res.write(html);
    res.end();
});

/**
 * Start the server, yay!
 */
server.listen(SERVER.port);
log('Listening on port ' + SERVER.port);

export default server;

