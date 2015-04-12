import debug from 'debug';
const log = debug('entity:pipe');

import {PipeGraphicsComponent as graphics} from 'components/graphics/pipe';

class Pipe {
    constructor() {
        log("creating");

        this.components = {graphics};
    }
}

export {Pipe}
