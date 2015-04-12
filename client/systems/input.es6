class InputSystem {
    constructor(entities) {
        this.entities = entities;

        // Canvas is where we get input from
        this.canvas = global.document.getElementById('main-canvas');
    }

    run() {
        this.canvas.addEventListener('click', this.onClick.bind(this));
    }

    onClick() {
        let bird = this.entities[0];
        bird.components.physics.velocity.y = 0.7;
    }
}

export {InputSystem}
