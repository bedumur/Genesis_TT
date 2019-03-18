import {createSelector} from 'reselect'

export const stateSelector = state => state;
export const entitiesSelector = createSelector(stateSelector, state => state.entities);
export const recordListSelector = createSelector(entitiesSelector, entities => entities.valueSeq().toArray());
