class GraphicsSystem {
    constructor(entities) {
        this.entities = entities;
    }

    run() {
        for (let i = 0; i < 5; i++) {
            this.tick();
        }
    }

    tick() {
        for (let i = 0; i < this.entities.length; i++) {
            let entity = this.entities[i];

            if (! 'graphics' in entity.components) continue;

            entity.components.graphics.draw();
        }
    }
}

export {GraphicsSystem};
