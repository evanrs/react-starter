const React = require('react');

// Components
const Nav = require('./Nav');
const Page = require('./Page');

const config = global.App.config;

// Component style
require('./styles/app.less');
// Optional styles
const dynamiteStyle = require('./styles/delorean-dynamite.useable.less').use();

// React component class
const App = React.createClass({
    render() {
        // Use JSX anywhere.
        var currentPage = <Page config={config}/>;

        // Or disable them later
        if (!true) { dynamiteStyle.unuse(); }

        // Must return a wrapping element
        return (
            <div className="app-instance">
                <Nav config={config}/>
                {currentPage}
            </div>
        );
    }
});


module.exports = App;
