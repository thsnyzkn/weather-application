import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { client } from "../../api/client";

const initialState = {
  weathers: [],
  status: "idle",
  error: null,
  activeWeather: {},
};

export const fetchWeatherList = createAsyncThunk(
  "weathers/fetchWeatherList",
  async () => {
    const response = await axios.get(
      "data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22"
    );
    return response?.data?.list;
  }
);

export const weatherSlice = createSlice({
  name: "weathers",
  initialState,
  reducers: {
    selectWeather: (state, action) => {
      state.activeWeather = state.weathers.find(
        (weather) => weather.dt === action.payload
      );
    },
  },
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
export const { selectWeather } = weatherSlice.actions;
export const selectAllWeathers = (state) => state.weathers.weathers;

export default weatherSlice.reducer;
