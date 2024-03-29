import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: state.length + 1,
        text: action.payload.text,
    });
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      const todoToUpdate = state.find((todo) => todo.id === action.payload.id);
      if (todoToUpdate) {
        todoToUpdate.text = action.payload.text;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
