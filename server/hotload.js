var config = require('config');
var debug = require('debug');
var notifier = require('node-notifier');
var webpack = require('webpack');
var webpackConfig = require('../webpack.config');
var WebpackDevServer = require('webpack-dev-server');

var NAME = config.get('app.name');
var PORT = config.get('webpack.hotload.port');
var HOST = "http://localhost:" + PORT;

var log = debug('webpack:dev');
var compiler = webpack(webpackConfig);

compiler.plugin("done", function (stats) {
    var errors = stats.compilation.errors;
    if (errors.length) {
        notifier.notify({
            title: errors[0].module.rawRequest.replace('.', NAME),
            message: errors[0].error.message.split(': ').join('\n')
        });
    }
});

var server = new WebpackDevServer(compiler, {
    contentBase: HOST,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
    hot: true,
    quiet: true
});

log("Starting");

server.listen(PORT, 'localhost', function (err, result) {
    if (err) {
        log("Error:", err);
    }

    log("Listening on port " + PORT);
});
