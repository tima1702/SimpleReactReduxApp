import {ADD_COUNTER, DEC_COUNTER} from '../constans/counter';

export const addCounter = () => dispatch => {
  dispatch({
    type: ADD_COUNTER
  })
};

export const decCounter = () => dispatch => {
  dispatch({
    type: DEC_COUNTER
  })
};

