import {Map, OrderedMap} from 'immutable'
import {v4} from 'uuid'

export function generateRandomId() {
    return v4()
}

export function convertArrayToImmutableEntities(data = [], RecordModel = Map) {
    let entities = {};

    for (let i = 0; i < data.length; i++) {
        const randomId = generateRandomId();
        entities[randomId] = (new RecordModel(data[i])).set('uid', randomId);
    }

    return new OrderedMap(entities)
}

export function throttle(f, t) {
    return function (args) {
        let previousCall = throttle.lastCall;
        throttle.lastCall = Date.now();
        if (!previousCall || throttle.lastCall - previousCall > t) {
            f(args)
        }
    }
}