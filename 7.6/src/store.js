import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import accountSlice from "./features/account/accountSlice";
import showSlice from "./components/showSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    account: accountSlice,
    show:showSlice
  },
});
