import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getWeathers } from "../../api/client";
const initialState = {
  weathers: [],
  status: "idle",
  error: null,
  activeWeather: {},
};

export const fetchWeatherList = createAsyncThunk(
  "weathers/fetchWeatherList",
  async () => {
    const response = await getWeathers();
    return response?.data?.list;
  }
);

export const weatherSlice = createSlice({
  name: "weathers",
  initialState,
  reducers: {
    selectWeather: (state, action) => {
      state.activeWeather = state.weathers.find((weather) => {
        return weather.dt === action.payload;
      });
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
