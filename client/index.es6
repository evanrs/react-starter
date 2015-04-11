// var React = require('react');
// var App = require('./App');

// React.renderComponent(
//     React.createElement(App), document.getElementById('app'));

import {FlappyBird} from 'app/flappyBird';

document.addEventListener('DOMContentLoaded', e => new FlappyBird().run());
