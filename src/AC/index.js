import {CONFIRM_CELL_CHANGES, CHANGE_FILTER_VALUE, RESET_FILTERS} from '../helpers/constants'

export function confirmCellChanges(id, field, newValue){
    return {
        type: CONFIRM_CELL_CHANGES,
        payload: {id, field, newValue}
    }
}

export function changeFilterValue(fieldName, filterValue){
    return {
        type: CHANGE_FILTER_VALUE,
        payload: {fieldName, filterValue}
    }
}

export function resetFilters(){
    return {
        type: RESET_FILTERS
    }
}