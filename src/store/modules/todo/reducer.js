const initialState = [];

function todo(state = initialState, action) {
  switch (action?.type) {
    case '@todo/ADD': {
      const item = {
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
