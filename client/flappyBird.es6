import {GraphicsSystem} from 'systems/graphics';
import {Bird} from 'entities/bird';

class FlappyBird {
    constructor() {
        this.entities = [new Bird()];
        this.graphics = new GraphicsSystem(this.entities);
    }

    run() {
        this.graphics.run();
    }
}

export {FlappyBird};
