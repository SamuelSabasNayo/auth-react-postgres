import { GET_MESSAGES, CREATE_MESSAGE } from '../actions/types';

const initialState = {};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return action.payload.msg;
    case CREATE_MESSAGE:
      return (state = action.payload);
    default:
      return state;
  }
};
