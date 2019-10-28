import { GET_PEOPLE_LIST, GET_PEOPLE_LIST_SUCCESS } from './peopleListActions';

const initialState = {
  peoplelist: [],
  isFetchingData: false,
}

export const peopleListReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_PEOPLE_LIST:
      return {
        ...state,
        isFetchingData: true,
      }

    case GET_PEOPLE_LIST_SUCCESS:
      const { payload } = action;

      return {
        ...state,
        peoplelist: payload,
        isFetchingData: false,
      }

    default:
      return state;
  };
}
