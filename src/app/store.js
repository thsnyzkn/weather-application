import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/weathers/weatherSlice';

export default configureStore({
  reducer: {
    weathers: weatherReducer,
  },
});
