import { createSlice } from "@reduxjs/toolkit";

const show = createSlice({
  name: "show",
  initialState: {
    users: [],
  },
  reducers: {
    showBtn: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { showBtn } = show.actions;
export default show.reducer;

export function getUsers() {
  return async function (dispatch) {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    dispatch({ type: "show/showBtn", payload: data });
  };
}
