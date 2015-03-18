const React = require('react');

const Masthead = React.createClass({

    render() {
        return (
            <a className="nav-logo" href="/">
              <img src="/public/assets/masthead-blue.svg" alt="Thinkful"/>
            </a>
        );
    }

});

module.exports = Masthead;