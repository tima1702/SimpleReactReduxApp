import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result
};

export default function configureStore(initialState = {}) {
  return createStore(
      rootReducer,
      applyMiddleware(thunk, logger),
  );
}