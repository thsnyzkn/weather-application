import styled from "styled-components";
import Cloud from "../Cloud";
import Sun from "../Sun";
import Heading from "../Heading";
import HeadingOverline from "../HeadingOverline";
import SvgWrapper from "../SvgWrapper";
import { kelvinToCelsius, formatDateToHour } from "../../utils";

const UnorderedList = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

const ListElement = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ activeElement }) =>
    activeElement ? "#51557A" : "transparent"};
  padding: 30px;
  min-height: 200px;
  &:hover {
    background-color: #3b3f69;
    cursor: pointer;
  }
  margin: 0 30px;
  border-radius: 6px;
`;

const WeatherList = ({ weathers, activateWeather, activeWeatherId }) => (
  <UnorderedList role="toolbar">
    {weathers?.map((weather) => (
      <ListElement
        tabIndex="1"
        role="button"
        key={weather.dt}
        onClick={() => activateWeather(weather.dt)}
        activeElement={activeWeatherId === weather.dt}
      >
        <HeadingOverline>{formatDateToHour(weather.dt_txt)}</HeadingOverline>
        <SvgWrapper>
          {weather.weather[0].main === "Clear" ? <Sun /> : <Cloud />}
        </SvgWrapper>
        <Heading>{kelvinToCelsius(weather.main.temp)}</Heading>
      </ListElement>
    ))}
  </UnorderedList>
);

export default WeatherList;
