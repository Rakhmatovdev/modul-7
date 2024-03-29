import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    deleteTodo: (state, action) => {
  return state.list.filter((todo) => todo !== action.payload);

    },
  },
});


export const { addTodo, deleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
