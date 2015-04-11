import React from 'react';

class BirdGraphicsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {entity: props.entity};
    }

    render() {
        console.log("I believe I can fly");
        return <div>This is Flappy Bird.</div>;
    }
}

BirdGraphicsComponent.draw = function draw (context) {
    console.log("I be drawin");
}

export {BirdGraphicsComponent}
