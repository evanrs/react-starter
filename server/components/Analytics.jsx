import React from 'react';
import segmentioSnippet from 'segmentio-snippet';

const SegmentioSnippet = React.createClass({
    render() {
        if(this.props.writeKey) {
            // Generate snippet code
            let snippet = segmentioSnippet.min({
                apiKey: this.props.writeKey,
                host: this.props.host || 'cdn.segment.com'
            });
            // Identify call for user
            if(this.props.user) {
                let user = this.props.user;
                snippet += `;analytics.identify(${user.id}, ${JSON.stringify(user)});`;
            }
            // Inject code into script tag
            return <script dangerouslySetInnerHTML={{__html: snippet}} type="text/javascript"/>
        }

        return <script>/*SegmentIO writeKey not defined*/</script>
    }

});

export default SegmentioSnippet;
