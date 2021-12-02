import styled from "styled-components";
import PropTypes from "prop-types";
import Cloud from "../Cloud";
import Sun from "../Sun";
import Heading from "../Heading";
import HeadingOverline from "../HeadingOverline";
import SvgWrapper from "../SvgWrapper";
import { kelvinToCelsius, formatDateToHour } from "../../utils";

const UnorderedList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ListElement = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ activeElement, theme }) =>
    activeElement ? theme.colors.activeWeatherBackground : "transparent"};
  min-height: 200px;
  transition: 220ms all ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoveredWeatherBackground};
    cursor: pointer;
  }
  margin: 0 20px;
  border-radius: 6px;
`;

const Button = styled.button`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  appearance: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 30px;
  transition: 220ms all ease-in-out;
  &:hover {
    outline-style: solid;
    outline-color: transparent;
  }
`;

const WeatherList = ({ weathers, activateWeather, activeWeatherId }) => (
  <UnorderedList>
    {weathers?.map((weather, index) => (
      <ListElement
        key={weather.dt}
        onClick={() => activateWeather(weather.dt)}
        activeElement={activeWeatherId === weather.dt}
      >
        <Button
          aria-label="Click to select a weather for the respective time"
          data-testid={index}
        >
          <HeadingOverline>{formatDateToHour(weather.dt_txt)}</HeadingOverline>
          <SvgWrapper>
            {weather.weather[0].main === "Clear" ? <Sun /> : <Cloud />}
          </SvgWrapper>
          <Heading data-testid={`small-weather-degree-${weather.dt}`}>
            {kelvinToCelsius(weather.main.temp)}
          </Heading>
        </Button>
      </ListElement>
    ))}
  </UnorderedList>
);
WeatherList.propTypes = {
  weathers: PropTypes.array,
};
WeatherList.defaultProps = {
  weathers: [],
};

export default WeatherList;
