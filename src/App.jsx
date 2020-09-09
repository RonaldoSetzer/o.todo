import React from 'react';
import { Provider } from 'react-redux';

import GlobalStyles from '@/styles/global';
import Todo from '@/pages/Todo';

import './config/Reactotron'
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
