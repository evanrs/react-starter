import debug from 'debug';

import {BirdGraphicsComponent} from 'components/graphics/bird';
import {PhysicsComponent} from 'components/physics/physics';

const log = debug('entity:bird');

class Bird {
    constructor() {
        log("creating");

        this.components = {
            graphics: new BirdGraphicsComponent(this),
            physics: new PhysicsComponent(this)
        };

    }
}

export {Bird};
