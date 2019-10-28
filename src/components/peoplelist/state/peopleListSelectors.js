import { createSelector } from 'reselect'

const peopleListStateSlice = (state) => state;

export const peopleListDataSelector = createSelector(
  peopleListStateSlice,
  (state) => state.peoplelist,
);
