import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    currentUser: null,
    search: "",
  },
  reducers: {
    add: (state, action) => {
      state.users = [...state.users, ...action.payload];
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    unsetCurrentUser: (state) => {
      state.currentUser = null;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { add, setCurrentUser, unsetCurrentUser, setSearch } = usersSlice.actions;

export const getUsers = (state) => state.users.users;
export const getCurrentUser = (state) => state.users.currentUser;
export const getSearch = (state) => state.users.search;

export default usersSlice.reducer;
