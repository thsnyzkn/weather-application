import "./App.css";
import WeatherList from "./components/WeatherList";
import ActiveWeatherDetails from "./components/ActiveWeatherDetails";
import ActivityStatement from "./components/ActivityStatement";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchWeatherList,
  selectAllWeathers,
  selectWeather,
} from "./features/weathers/weatherSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const weatherList = useSelector(selectAllWeathers);
  const { error, activeWeather, status } = useSelector(
    (state) => state.weathers
  );
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchWeatherList());
    }
  }, [status, dispatch]);
  const activateWeather = (weatherId) => {
    dispatch(selectWeather(weatherId));
  };
  return (
    <main>
      {error ? (
        <ActivityStatement activity="error">{error}</ActivityStatement>
      ) : null}
      {status === "loading" ? (
        <ActivityStatement activity="loading">Loading...</ActivityStatement>
      ) : (
        <>
          {" "}
          <ActiveWeatherDetails activeWeather={activeWeather} />
          <WeatherList
            weathers={weatherList}
            activateWeather={activateWeather}
            activeWeatherId={activeWeather.dt}
          />
        </>
      )}
    </main>
  );
}

export default App;
