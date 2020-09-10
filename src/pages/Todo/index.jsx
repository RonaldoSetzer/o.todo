import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import QuickAdd from '@/components/QuickAdd';
import TodoList from '@/components/TodoList';
import { add } from '@/store/modules/todo/actions';

function Todo() {
  const dispatch = useDispatch();
  const todo = useSelector(state => state.todo);

  function handleSubmit(value) {
    dispatch(add(value));
  }

  return (
    <main>
      <QuickAdd onSubmit={handleSubmit} />
      <TodoList provider={todo} />
    </main>
  );
}

export default Todo;
