import { IMockAPIData } from "../../interfaces/mockapi.interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type DataTypeArray = {
  data: Array<IMockAPIData>;
  filteredData: Array<IMockAPIData>;
  totalUsers: number;
  totalPages: number;
  searchTerm: string;
  hasFetched: boolean;
};

const initialState: DataTypeArray = {
  data: [],
  filteredData: [],
  totalUsers: 0,
  totalPages: 0,
  searchTerm: "",
  hasFetched: true,
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData: (state, { payload }: { payload: IMockAPIData[] }) => {
      state.data = payload;
    },
    setUserFilterData: (state, { payload }: { payload: IMockAPIData[] }) => {
      state.filteredData = payload;
    },
    resetUserData: (state) => {
      state.data = [];
      state.filteredData = [];
      state.totalUsers = 0;
      state.totalPages = 0;
      state.searchTerm = "";
      state.hasFetched = true;
    },
    setTotalUsers: (state, { payload }: PayloadAction<number>) => {
      state.totalUsers = payload;
    },
    setHasFetched: (state, { payload }: PayloadAction<boolean>) => {
      state.hasFetched = payload;
    },
    setSearchTerm: (state, { payload }: PayloadAction<string>) => {
      state.searchTerm = payload;
    },
    setTotalPage: (state, { payload }: PayloadAction<number>) => {
      state.totalPages = payload;
    },
  },
});

export const {
  setUserData,
  setUserFilterData,
  setTotalUsers,
  resetUserData,
  setHasFetched,
  setSearchTerm,
  setTotalPage,
} = userDataSlice.actions;

export default userDataSlice.reducer;
