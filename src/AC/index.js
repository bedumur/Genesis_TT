import {CONFIRM_CELL_CHANGES} from '../helpers/constants'

export function confirmCellChanges(id, field, newValue){
    return {
        type: CONFIRM_CELL_CHANGES,
        payload: {id, field, newValue}
    }
}