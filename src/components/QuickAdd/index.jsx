import React, { useState } from 'react';

import { Input, Button } from '@/components/ui/common';

import { Container } from './styles';

function QuickAdd({ onSubmit }) {
  const [value, setValue] = useState();

  function clear() {
    document.getElementById('form').reset();
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!value || !onSubmit) return;

    onSubmit(value);
    clear();
  }

  function handleChange(e) {
    e.preventDefault();

    setValue(e.currentTarget.value);
  }

  return (
    <Container id="form" onSubmit={handleSubmit}>
      <Input
        id="input-add"
        onChange={handleChange}
        placeholder="type a new task todo"
      ></Input>
      <Button onClick={handleSubmit}>Add</Button>
    </Container>
  );
}

export default QuickAdd;
