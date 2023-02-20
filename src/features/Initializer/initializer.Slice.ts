import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import randomNumber from "./initializerApi";

export interface RandomNumState {
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: RandomNumState = {
  value: 0,
  status: "idle",
};

export const randomAsync = createAsyncThunk("random/randomNumber", async () => {
  const response = await randomNumber();
  return response;
});

export const randomSlice = createSlice({
  name: "random",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(randomAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        randomAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.status = "idle";
          state.value = action.payload;
        }
      )
      .addCase(randomAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const seletcRandom = (state: RootState) => state.random.value;
export const selectRandomStatus = (state: RootState) => state.random.status;
export default randomSlice.reducer;
