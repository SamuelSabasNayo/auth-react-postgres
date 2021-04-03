import { combineReducers } from 'redux';
import { leadListReducer } from './leadReducers';

export default combineReducers({
  leadList: leadListReducer,
});
