import React from 'react';

import TodoItem from '@/components/TodoItem';

import { Container } from './styles';

function TodoList({ title, provider }) {
  return (
    <Container>
      <h1>To Do</h1>
      <ul>
        {provider.map(item => (
          <TodoItem />
        ))}
      </ul>
    </Container>
  );
}

export default TodoList;
