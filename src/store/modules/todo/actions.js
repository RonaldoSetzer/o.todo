export function add(value) {
  return {
    type: '@todo/ADD',
    value,
  };
}

export function remove() {
  return {
    type: '@todo/REMOVE',
  };
}

export function update() {
  return {
    type: '@todo/UPDATE',
  };
}
