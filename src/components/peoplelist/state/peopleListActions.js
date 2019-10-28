import axios from 'axios';

// ACTIONS
export const GET_PEOPLE_LIST = 'GET_PEOPLE_LIST';
export const GET_PEOPLE_LIST_SUCCESS = 'GET_PEOPLE_LIST_SUCCESS';
export const GET_PEOPLE_LIST_FAIL = 'GET_PEOPLE_LIST_FAIL';

// ACTIONS CREATORS
export const fetchPeopleList = () => {
  return (dispatch) => {

    dispatch({
      type: GET_PEOPLE_LIST,
    });

    axios.get('https://randomuser.me/api/?results=18')
      .then(res => {
        dispatch({
          type: GET_PEOPLE_LIST_SUCCESS,
          payload: res.data.results,
        });
      })
      .catch(err => {
        dispatch({
          type: GET_PEOPLE_LIST_FAIL,
        });
      });

  };
};
