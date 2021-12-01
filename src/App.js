import "./App.css";
import WeatherList from "./components/WeatherList";
import ActiveWeatherDetails from "./components/ActiveWeatherDetails";
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
    <main tabIndex="-1">
      {error && <div>{error}</div>}
      {status === "loading" ? (
        <div>Loading...</div>
      ) : (
        <>
          {" "}
          <ActiveWeatherDetails activeWeather={activeWeather} />
          <section style={{ overflowY: "scroll" }}>
            {weatherList && (
              <WeatherList
                weathers={weatherList}
                activateWeather={activateWeather}
                activeWeatherId={activeWeather.dt}
              />
            )}
          </section>
        </>
      )}
    </main>
  );
}

export default App;
