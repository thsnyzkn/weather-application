import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../api/client";

const initialState = {
  weathers: [],
  status: "idle",
  error: null,
};

export const fetchWeatherList = createAsyncThunk(
  "weathers/fetchWeatherList",
  async () => {
    const response = await client.get(
      "/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22"
    );
    debugger;
    return response?.data?.list;
  }
);

export const weatherSlice = createSlice({
  name: "weathers",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchWeatherList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchWeatherList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.weathers = state.weathers.concat(action.payload);
      })
      .addCase(fetchWeatherList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const selectAllWeathers = (state) => state.weathers.weathers;

export default weatherSlice.reducer;
