import {GraphicsSystem} from 'systems/graphics';
import {PhysicsSystem} from 'systems/physics';
import {InputSystem} from 'systems/input';
import {Bird} from 'entities/bird';
import {Pipe} from 'entities/pipe';

class FlappyBird {
    constructor() {
        this.entities = [new Bird()];
        this.graphics = new GraphicsSystem(this.entities);
        this.physics = new PhysicsSystem(this.entities);
        this.input = new InputSystem(this.entities);
    }

    run() {
        this.graphics.run();
        this.physics.run();
        this.input.run();
    }
}

export {FlappyBird};
