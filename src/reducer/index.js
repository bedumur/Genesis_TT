import {Record} from 'immutable'
import {convertArrayToImmutableEntities} from '../helpers/utils'
import {ITEM_LIST} from '../mock'

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

export default (tableState = new ReducerRecord(), action) => {
    return tableState
}