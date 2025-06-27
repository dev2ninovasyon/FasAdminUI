import { createSlice } from "@reduxjs/toolkit";

interface StateType {
  id?: number | any;
  token?: string;
}

const initialState: StateType = {
  id: 0,
  token: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setId: (state: StateType, action) => {
      state.id = action.payload;
    },
    setToken: (state: StateType, action) => {
      state.token = action.payload;
    },
  },
});

export const { setId, setToken } = UserSlice.actions;

export default UserSlice.reducer;
