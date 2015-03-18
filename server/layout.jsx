import _ from 'lodash';
import React from 'react';
import config from 'config';

import ApplicationStore from '../stores/ApplicationStore';
import SegmentioSnippet from 'react-analytics';

const SEGMENTIO = config.get('app.services.segmentio');
const WEBPACK = config.get('webpack');

const SRC = WEBPACK.hotload ?
    '//localhost:8888/public/build' : '/public/build';
const STYLE_SRC = `${SRC}/main.css`;
const CLIENT_SRC = `${SRC}/client.js`;

const Html = React.createClass({
    render() {
        return (
            <html>
            <head>
                <meta charSet="utf-8" />
                <title>{config.app.name}</title>
                <meta name="viewport" content="width=device-width, user-scalable=no" />
                <link rel="stylesheet" href={STYLE_SRC} />
                <link rel="stylesheet" href="/public/webfonts/ss-gizmo.css" />
            </head>
            <body>
                <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
                <SegmentioSnippet writeKey={SEGMENTIO.key} />
                <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
                <script src={CLIENT_SRC} defer></script>
            </body>
            </html>
        );
    }
});

module.exports = Html;