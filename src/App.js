import "./App.css";
import Sun from "./components/Sun";
import Cloud from "./components/Cloud";
import HeadingOverline from "./components/HeadingOverline";
import UpperSection from "./components/UpperSection";
import Heading from "./components/Heading";
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
      dispatch(fetchWeatherList());
    }
  }, [weatherStatus, dispatch]);
  return (
    <main>
      <UpperSection>
        <Sun fill="#FFC700" />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <HeadingOverline>Clear</HeadingOverline>
            <HeadingOverline>12° / 2°</HeadingOverline>
          </div>
          <Heading size="xl" topSpaced px>
            11°
          </Heading>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <HeadingOverline>Munich</HeadingOverline>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Heading size="lg">Thursday</Heading>
            <Heading size="lg">28. March</Heading>
          </div>
        </div>
      </UpperSection>
      <section style={{ overflowY: "scroll" }}>
        <ul
          style={{
            display: "flex",
            listStyleType: "none",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {weatherList.map((weather) => (
            <li
              key={weather.dt}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "30px",
                minHeight: "200px",
                backgroundColor: "#3B3F69",
                margin: "0 30px",
                borderRadius: "6px",
              }}
            >
              <HeadingOverline>11:00</HeadingOverline>
              <div style={{ height: 75, width: 75 }}>
                <Cloud />
              </div>
              <Heading>10°</Heading>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
