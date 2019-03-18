import {Record} from 'immutable'
import {convertArrayToImmutableEntities} from '../helpers/utils'
import {ITEM_LIST} from '../mock'
import {CONFIRM_CELL_CHANGES} from '../helpers/constants'


export const CreatureRecord = Record({
    uid: null,
    name: null,
    height: null,
    mass: null,
    hair_color: null,
    skin_color: null,
    eye_color: null,
    birth_year: null,
    gender: null
});

// в случае отказа от возможности сортировать и фильтровать по отдельному полю
const FilterSortRecord = Record({
    name: null,
    height: null,
    mass: null,
    hair_color: null,
    skin_color: null,
    eye_color: null,
    birth_year: null,
    gender: null
});

const ReducerRecord = Record({
    entities: convertArrayToImmutableEntities(ITEM_LIST, CreatureRecord),
    filters: new FilterSortRecord(),
    sortOrders: new FilterSortRecord(),
    currentPage: 1
});

export default (state = new ReducerRecord(), action) => {
    const {type, payload} = action;

    switch(type){
        case CONFIRM_CELL_CHANGES:
            return state.setIn(['entities', payload.id, payload.field], payload.newValue);
    }

    return state
}