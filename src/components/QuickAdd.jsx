import React from 'react';

import { Input, Button, PageContainer as Container } from '@/components/ui/common';

function QuickAdd() {
  return (
    <Container>
      <Input placeholder="type a new task todo"></Input>
      <Button>Add</Button>
    </Container>
  );
}

export default QuickAdd;
