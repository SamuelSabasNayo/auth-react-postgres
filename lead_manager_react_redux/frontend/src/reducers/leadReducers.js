import { GET_LEADS } from '../actions/types';

export const leadListReducer = (state = { leads: [] }, action) => {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leads: action.payload
      }
    default:
      return state;
  }
};
