import debug from 'debug';
import React from 'react';

const log = debug('graphics:pipe');

class PipeGraphicsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {entity: props.entity};
    }

    render() {
        log("I believe I can pipe");

        return <span>| |</span>
    }
}

PipeGraphicsComponent.draw = function draw () {
    log("I be pipe'n");
}

export {PipeGraphicsComponent}
