import debug from 'debug';
const log = debug('entity:bird');

import {BirdGraphicsComponent} from 'components/graphics/bird';
import {PhysicsComponent} from 'components/physics/physics';
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
