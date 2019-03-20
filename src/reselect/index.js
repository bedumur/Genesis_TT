import {createSelector} from 'reselect'
import {ASC_SORT_ORDER, DESC_SORT_ORDER} from '../helpers/constants'


function toLowerCaseAndTrim(val) {
    return val.toLowerCase().trim();
}

function matchValues(a, b) {
    return ~toLowerCaseAndTrim(a).indexOf(toLowerCaseAndTrim(b))
}

function filterRecordList(recordList, filters) {
    let res = [...recordList];
    const objectFilter = filters.toObject();

    for (const filterKey in objectFilter) {
        if (!objectFilter.hasOwnProperty(filterKey) || !objectFilter[filterKey]) continue;

        res = res.filter(record => matchValues(record[filterKey], objectFilter[filterKey]))
    }
    return res
}

const sortEntities = (sortOrder, fieldKey) => (a, b)  => {
    switch(sortOrder){
        case ASC_SORT_ORDER:
            return a[fieldKey].localeCompare(b[fieldKey]);
        case DESC_SORT_ORDER:
            return b[fieldKey].localeCompare(a[fieldKey]);
        default:
            throw new Error('No sort order in reselect')
    }
};

function sortRecordList(recordList, sortOrders) {
    let res = [...recordList];

    const objectSortOrders = sortOrders.toObject();

    for (const fieldKey in objectSortOrders) {
        if (!objectSortOrders.hasOwnProperty(fieldKey) || !objectSortOrders[fieldKey]) continue;

        const sortOrder = objectSortOrders[fieldKey];

        res = res.sort(sortEntities(sortOrder, fieldKey))
    }

    return res
}

export const fieldKeySelector = (_, props) => props.fieldKey;

export const stateSelector = state => state;
export const entitiesSelector = createSelector(stateSelector, state => state.entities);
export const recordListSelector = createSelector(entitiesSelector, entities => entities.valueSeq().toArray());

export const filterSelector = createSelector(stateSelector, state => state.filters);
export const filterValueSelector = createSelector(filterSelector, fieldKeySelector, (filters, fieldKey) => filters[fieldKey]);
export const filteredRecordListSelector = createSelector(recordListSelector, filterSelector, filterRecordList);

export const sortOrderListSelector = createSelector(stateSelector, state => state.sortOrders);
export const sortOrderItemSelector = createSelector(sortOrderListSelector, fieldKeySelector, (sortOrders, fieldKey) => sortOrders[fieldKey]);
export const sortedFilteredRecordListSelector = createSelector(filteredRecordListSelector, sortOrderListSelector, sortRecordList);