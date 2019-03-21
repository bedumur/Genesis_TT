import {Record} from 'immutable'
import {convertArrayToImmutableEntities} from '../helpers/utils'
import {ITEM_LIST} from '../mock'
import {
    CONFIRM_CELL_CHANGES,
    CHANGE_FILTER_VALUE,
    RESET_FILTERS,
    CHANGE_SORT_ORDER,
    RESET_SORTING,
    SORT_ORDERS_LIST
} from '../helpers/constants'

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

const FilterRecord = Record({
    name: '',
    height: '',
    mass: '',
    hair_color: '',
    skin_color: '',
    eye_color: '',
    birth_year: '',
    gender: ''
});

const SortRecord = Record({
    fieldKey: null,
    sortOrder: null
});

const ReducerRecord = Record({
    entities: convertArrayToImmutableEntities(ITEM_LIST, CreatureRecord),
    filters: new FilterRecord(),
    sorting: new SortRecord(),
    currentPage: 1
});

let sortOrderIndex = 0;

export default (state = new ReducerRecord(), action) => {
    const {type, payload} = action;

    switch (type) {
        case RESET_SORTING:
            return state.set('sorting', new SortRecord());
        case CHANGE_SORT_ORDER:
            if (
                payload.fieldKey !== state.getIn(['sorting', 'fieldKey'])
                ||
                sortOrderIndex > SORT_ORDERS_LIST.length - 1
            ) sortOrderIndex = 0;

            return state
                .setIn(['sorting', 'fieldKey'], payload.fieldKey)
                .setIn(['sorting', 'sortOrder'], SORT_ORDERS_LIST[sortOrderIndex++]);
        case RESET_FILTERS:
            return state.set('filters', new FilterRecord());
        case CHANGE_FILTER_VALUE:
            return state.setIn(['filters', payload.fieldKey], payload.filterValue);
        case CONFIRM_CELL_CHANGES:
            return state.setIn(['entities', payload.id, payload.field], payload.newValue);
        default:
            return state
    }
}