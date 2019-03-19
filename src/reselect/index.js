import {createSelector} from 'reselect'

function toLowerCaseAndTrim(val){
    return val.toLowerCase().trim();
}

function matchValues(a, b) {
    return ~toLowerCaseAndTrim(a).indexOf(toLowerCaseAndTrim(b))
}

export const stateSelector = state => state;
export const entitiesSelector = createSelector(stateSelector, state => state.entities);
export const recordListSelector = createSelector(entitiesSelector, entities => entities.valueSeq().toArray());

export const filterSelector = createSelector(stateSelector, state => state.filters);
export const fieldNameSelector = (_, props) => props.fieldName;
export const filterValueSelector = createSelector(filterSelector, fieldNameSelector, (filters, fieldName) => filters[fieldName]);

export const filteredRecordListSelector = createSelector(recordListSelector, filterSelector, (recordList, filters) => {
    let res = [...recordList];

    const objectFilter = filters.toObject();

    for (const filterName in objectFilter) {
        if (!objectFilter.hasOwnProperty(filterName) || !objectFilter[filterName]) continue;

        res = res.filter(record => matchValues(record[filterName], objectFilter[filterName]))
    }

    return res
});