import React from 'react';
import { Provider } from 'redux';

import GlobalStyles from '@/styles/global';
import Todo from '@/pages/Todo';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Todo />
    </Provider>
  );
}

export default App;
