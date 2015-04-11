import {BirdGraphicsComponent as graphics} from 'components/graphics/bird';

class Bird {
    constructor() {
        console.log("Creating Bird entity");
        this.components = {graphics};
    }
}

export {Bird};
