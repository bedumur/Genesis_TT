import {Record} from 'immutable'
import {convertArrayToImmutableEntities} from '../helpers/utils'
import {ITEM_LIST} from '../mock'
import {CONFIRM_CELL_CHANGES, CHANGE_FILTER_VALUE, RESET_FILTERS} from '../helpers/constants'


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
    name: '',
    height: '',
    mass: '',
    hair_color: '',
    skin_color: '',
    eye_color: '',
    birth_year: '',
    gender: ''
});

const ReducerRecord = Record({
    entities: convertArrayToImmutableEntities(ITEM_LIST, CreatureRecord),
    filters: new FilterSortRecord(),
    sortOrders: new FilterSortRecord(),
    currentPage: 1
});

export default (state = new ReducerRecord(), action) => {
    const {type, payload} = action;

    switch (type) {
        case RESET_FILTERS:
            return state.set('filters', new FilterSortRecord());
        case CHANGE_FILTER_VALUE:
            return state.setIn(['filters', payload.fieldName], payload.filterValue);
        case CONFIRM_CELL_CHANGES:
            return state.setIn(['entities', payload.id, payload.field], payload.newValue);
        default:
            return state
    }
}