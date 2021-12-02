import styled from "styled-components";
import Sun from "../Sun";
import Cloud from "../Cloud";
import Heading from "../Heading";
import HeadingOverline from "../HeadingOverline";
import SvgWrapper from "../SvgWrapper";
import { kelvinToCelsius, formatDateToHour } from "../../utils";

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
  border-radius: ${({ theme }) => theme.radii.small};
`;

const Button = styled.button`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  appearance: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 35px;
  transition: 220ms all ease-in-out;
`;

const WeatherElement = ({ weather, activateWeather, activeWeatherId }) => {
  return (
    <ListElement
      onClick={() => activateWeather(weather.dt)}
      activeElement={activeWeatherId === weather.dt}
    >
      <Button aria-label="Click to select a weather for the respective time">
        <HeadingOverline data-testid="weather-hour">
          {formatDateToHour(weather.dt_txt)}
        </HeadingOverline>
        <SvgWrapper>
          {weather.weather[0].main === "Clear" ? <Sun /> : <Cloud />}
        </SvgWrapper>
        <Heading data-testid={"small-weather-degree"}>
          {kelvinToCelsius(weather.main.temp)}
        </Heading>
      </Button>
    </ListElement>
  );
};

export default WeatherElement;
