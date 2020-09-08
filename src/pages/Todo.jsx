import React from 'react';

import QuickAdd from '@/components/QuickAdd';
import TodoList from '@/components/TodoList';

function Todo() {
  return (
    <main>
      <QuickAdd />
      <TodoList provider={[]} />
    </main>
  );
}

export default Todo;
