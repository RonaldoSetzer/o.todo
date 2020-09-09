const initialState = [];

function todo(state = initialState, action) {
  switch (action?.type) {
    case '@todo/ADD':
      return state;

    case '@todo/REMOVE':
      return state;

    case '@todo/UPDATE':
      return state;

    default:
      return state;
  }
}

export default todo;
