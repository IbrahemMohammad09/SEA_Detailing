import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: !!localStorage.getItem("adminToken"), // تحقق إذا كان المستخدم قد سجل دخول
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      localStorage.setItem("adminToken", action.payload); // حفظ التوكن في localStorage
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("adminToken"); // حذف التوكن من localStorage
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
