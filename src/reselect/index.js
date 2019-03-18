import {createSelector} from 'reselect'


export const stateSelector = state => state;
export const entitiesSelector = createSelector(stateSelector, state => state.entities);
export const recordListSelector = createSelector(entitiesSelector, entities => entities.valueSeq().toArray());

export const filterSelector = createSelector(stateSelector, state => state.filters);
export const fieldNameSelector = (_, props) => props.fieldName;
export const filterValueSelector = createSelector(filterSelector, fieldNameSelector, (filters, fieldName) => filters[fieldName]);
