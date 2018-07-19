import {combineReducers} from 'redux';
import simpleReducer from './simpleReducer';
import counterReducer from './counterReducer';

export default combineReducers({
  simpleReducer,
  counterReducer,
});