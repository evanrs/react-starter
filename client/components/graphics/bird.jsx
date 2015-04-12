import _ from 'lodash';
import debug from 'debug';
import React from 'react';

const log = debug('graphics:bird');

class BirdGraphicsComponent {
    constructor(entity) {
        this.entity = entity;
    }

    draw(context) {
        let {x, y} = this.entity.components.physics.position;

        // log("I be drawin");
        log(x, y);
        context.save();
        context.translate(x, y);
        context.beginPath();
        context.arc(0, 0, 0.02, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
        context.restore();
    }
}

export {BirdGraphicsComponent}
