const React = require('react');

const config = global.App.config;

import Bird from 'entities/bird';

// Component style
require('./styles/app.less');

// React component class
const App = React.createClass({
    render() {
        // Must return a wrapping element
        return (
            <div className="instance">

            </div>
        );
    }
});

module.exports = App;

