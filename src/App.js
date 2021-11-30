import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchWeatherList,
  selectAllWeathers,
} from "./features/weathers/weatherSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const weatherList = useSelector(selectAllWeathers);
  console.log({ weatherList });
  const weatherStatus = useSelector((state) => state.weathers.status);
  const error = useSelector((state) => state.weathers.error);
  console.log({ weatherStatus });
  useEffect(() => {
    if (weatherStatus === "idle") {
      dispatch(fetchWeatherList);
    }
  }, [weatherStatus, dispatch]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {weatherStatus === "succeeded" ? (
          JSON.stringify(weatherList)
        ) : (
          <div>Where are you??</div>
        )}
      </header>
    </div>
  );
}

export default App;
