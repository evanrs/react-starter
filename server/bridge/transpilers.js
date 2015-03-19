// Extends native require for new extensions
// Transform JSX
require('node-jsx').install({
    extension: '.jsx', harmony: true });
// Transform to ES5
require('babel/register')({
    extensions: ['.jsx', '.es6'], ignore: false });
// "Unrequire" less files, a bridge for our Webpack environment
require.extensions['.less'] = function (module, filename) {
    module._compile("", filename); };
