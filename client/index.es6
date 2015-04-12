import 'styles/app.less';

// var React = require('react');
// var App = require('./App');

// React.renderComponent(
//     React.createElement(App), document.getElementById('app'));

import debug from 'debug';
debug.enable('entities:* graphics:* systems:*');

import {FlappyBird} from 'app/flappyBird';

document.addEventListener('DOMContentLoaded', e => new FlappyBird().run());
