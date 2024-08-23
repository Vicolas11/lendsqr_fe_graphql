import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

const globalSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    },
  },
});

export const { setIsAuth } = globalSlice.actions;

export default globalSlice.reducer;
