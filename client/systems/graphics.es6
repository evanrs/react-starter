class GraphicsSystem {
    constructor(entities) {
        this.entities = entities;
        this.canvas = document.getElementById('main-canvas');
        this.context = this.canvas.getContext('2d');
    }

    run() {
        this.tick();
    }

    tick() {
        // Set the canvas to the correct size if the window is resized
        if (this.canvas.width != this.canvas.offsetWidth ||
            this.canvas.height != this.canvas.offsetHeight) {
            this.canvas.width = this.canvas.offsetWidth;
            this.canvas.height = this.canvas.offsetHeight;
        }

        // Clear the canvas
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.context.save();
        this.context.translate(this.canvas.width / 2, this.canvas.height);
        this.context.scale(this.canvas.height, -this.canvas.height);

        this.entities
            .map(entity => entity.components.graphics)
            .filter(graphics => !! graphics && graphics.draw)
            .forEach(graphics => graphics.draw(this.context));

        this.context.restore();

        global.requestAnimationFrame(this.tick.bind(this));
    }
}

export {GraphicsSystem};
