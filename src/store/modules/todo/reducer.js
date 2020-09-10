import {v4 as uuid} from 'uuid'
const initialState = [];


function todo(state = initialState, action) {
  switch (action?.type) {
    case '@todo/ADD': {
      const item = {
        id: uuid(),
        label: action.value,
        status: 'todo',
      };
      return [...state, item];
    }

    case '@todo/REMOVE':
      return state;

    case '@todo/UPDATE':
      return state;

    default:
      return state;
  }
}

export default todo;
