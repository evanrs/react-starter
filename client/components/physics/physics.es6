import debug from 'debug';

const log = debug('graphics:physics:physics');

class PhysicsComponent {
    constructor(entity) {
        this.entity = entity;

        this.position = {x: 0, y: 0};

        this.velocity = {x: 0, y: 0};

        this.acceleration = {x: 0, y: -1};
    }
}

PhysicsComponent.prototype.update = function update (delta) {
    const {velocity, acceleration, position} = this;

    velocity.x += acceleration.x * delta;
    velocity.y += acceleration.y * delta;

    position.x += velocity.x * delta;
    position.y += velocity.y * delta;

    if (position.y < 0) {
        velocity.y = velocity.y * -0.75;
        position.y = Math.abs(position.y * velocity.y);
    }
}

export {PhysicsComponent};
