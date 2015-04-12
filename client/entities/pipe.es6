import debug from 'debug';
const log = debug('entity:pipe');

import {PipeGraphicsComponent} from 'components/graphics/pipe';

class Pipe {
    constructor() {
        log("creating");

        this.components = {
            graphics: new PipeGraphicsComponent(this)
        };
    }
}

export {Pipe}
