class PhysicsComponent {
    constructor(entity) {
        this.entity = entity;

        this.position = {x: 0, y: 0};

        this.velocity = {x: 0, y: 0};

        this.acceleration = {x: 0, y: 0};
    }
}

PhysicsComponent.prototype.update = function update (delta) {
    const {velocity, acceleration, position} = this;
    console.log([velocity.x, velocity.y], [position.x, position.y]);
    ([[velocity, acceleration], [position, velocity]]).forEach(f => {
        f[0].x += f[1].x * delta;
        f[0].y += f[1].y * delta;
    });
}

export {PhysicsComponent};
