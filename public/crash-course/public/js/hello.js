var HELLO_COMPONENT = (function(){/*start*/

var Heading = React.createClass({
  render: function () {
    return (
      React.createElement("header", {
          style: {backgroundColor: "#6af", padding: 20, textAlign: "center"}},
        React.createElement(HelloWorld),
        React.createElement('hr'),
        React.createElement('p', null, "Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus."))
    )
  }
});

var HelloWorld = React.createClass({
  render: function () {
    return React.createElement("h1", null, "Hello World")
  }
});

module.exports = Heading;

/*end*/}).toString().split('start*/\n')[1].split('/*end')[0];