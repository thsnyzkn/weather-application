import styled from "styled-components";
import PropTypes from "prop-types";
import WeatherElement from "../WeatherElement";

const UnorderedList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ScrollableSection = styled.section`
  overflow-y: "scroll";
`;

const WeatherList = ({ weathers, activateWeather, activeWeatherId }) => (
  <ScrollableSection>
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
  </ScrollableSection>
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
