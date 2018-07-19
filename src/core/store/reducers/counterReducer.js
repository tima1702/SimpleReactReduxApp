import {ADD_COUNTER, DEC_COUNTER} from '../constans/counter';

export default (state = { value: 0}, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
          ...state,
        value: state.value + 1
      };
      case DEC_COUNTER:
      return {
          ...state,
        value: state.value - 1
      };
    default:
      return state
  }
}