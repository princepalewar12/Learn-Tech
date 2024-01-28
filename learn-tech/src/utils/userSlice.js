import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      console.log(`In the Update User`);
      const { id, firstName, lastName, city } = action.payload;
      const updatedUser = {id,firstName,lastName,city}
      console.log(id, firstName, lastName, city);

      const userIndex = state.users.findIndex((user) => user.id === id);
      console.log(userIndex);
      if(userIndex !== -1){
        state.users[userIndex] = {...state.users[userIndex], ...updatedUser}
      }
    },
  },
});

export const { addUser, removeUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
