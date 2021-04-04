import { combineReducers } from 'redux';
import { leadListReducer } from './leadReducers';
import { errorReducer } from './errors';
import { messageReducer } from './messages';

export default combineReducers({
  leadList: leadListReducer,
  errors: errorReducer,
  messages: messageReducer
});
