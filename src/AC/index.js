import {
    START_CELL_EDITING,
    CANCEL_CELL_EDITING,
    CONFIRM_CELL_CHANGES,
    CHANGE_FILTER_VALUE,
    RESET_FILTERS,
    CHANGE_SORT_ORDER,
    RESET_SORTING,
    CHANGE_PAGE,
} from '../helpers/constants'


export function startCellEditing(recordId, fieldKey){
    return {
        type: START_CELL_EDITING,
        payload: {recordId, fieldKey}
    }
}

export function cancelCellEditing(){
    return {
        type: CANCEL_CELL_EDITING
    }
}

export function confirmCellChanges(id, field, newValue) {
    return {
        type: CONFIRM_CELL_CHANGES,
        payload: {id, field, newValue}
    }
}

export function changeFilterValue(fieldKey, filterValue) {
    return {
        type: CHANGE_FILTER_VALUE,
        payload: {fieldKey, filterValue}
    }
}

export function resetFilters() {
    return {
        type: RESET_FILTERS
    }
}

export function changeSortOrder(fieldKey) {
    return {
        type: CHANGE_SORT_ORDER,
        payload: {fieldKey}
    }
}

export function resetSorting(){
    return {
        type: RESET_SORTING
    }
}

export function changePage(page){
    return {
        type: CHANGE_PAGE,
        payload: {page}
    }
}