import styled from "styled-components";
import PropTypes from "prop-types";
import WeatherElement from "../WeatherElement";

const UnorderedList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WeatherList = ({ weathers, activateWeather, activeWeatherId }) => (
  <section style={{ overflowY: "scroll" }}>
    <UnorderedList>
      {weathers?.map((weather) => (
        <WeatherElement
          key={weather.dt}
          weather={weather}
          activateWeather={activateWeather}
          activeWeatherId={activeWeatherId}
        />
      ))}
    </UnorderedList>
  </section>
);
WeatherList.propTypes = {
  weathers: PropTypes.array,
  activateWeather: PropTypes.func,
  activeWeatherId: PropTypes.number,
};
WeatherList.defaultProps = {
  weathers: [],
  activateWeather: () => {},
  activeWeatherId: null,
};

export default WeatherList;
