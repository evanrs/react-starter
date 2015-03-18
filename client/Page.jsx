const React = require('react');

require('./styles/page.less');
const Page = React.createClass({
    render() {
        const {config} = this.props;
        return (
            <div className="page-container">
                <h1 className="react-starter">{config.app.name}</h1>
                <img className="invisible meeter-greeter" alt={config.app.name} src="/public/assets/dishing-compact-discs.gif"/>
            </div>
        );
    }

});


module.exports = Page;
