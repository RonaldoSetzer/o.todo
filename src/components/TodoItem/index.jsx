import React from 'react';

import { Container } from './styles';

function TodoItem({ label }) {
  return <Container>{label}</Container>;
}

export default TodoItem;
