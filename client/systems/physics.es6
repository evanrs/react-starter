class PhysicsSystem {
    constructor(entities) {
        this.entities = entities;
    }

    run() {
        this._interval = global.setInterval(this.tick.bind(this), 1000 / 60);
    }

    tick() {
        this.entities
            .filter(entity => !! entity.components.physics)
            .forEach(entity => entity.components.physics.update(1/60));
    }
}

export {PhysicsSystem};
