export const addTodo = (text) => ({
    type: 'addTodo',
    payload: { text },
  });
  
  export const removeTodo = (id) => ({
    type: 'deleteTodo',
    payload: { id },
  });
  
  export const updateTodo = (id, text) => ({
    type: 'updateTodo',
    payload: { id, text },
  });
  