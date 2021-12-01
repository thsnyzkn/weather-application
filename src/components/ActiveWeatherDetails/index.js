import {
  kelvinToCelsius,
  pluckNameFromDate,
  pluckDayAndMonth,
} from "../../utils";

import UpperSection from "../UpperSection";
import SvgWrapper from "../SvgWrapper";
import Sun from "../Sun";
import Cloud from "../Cloud";
import Flex from "../Flex";
import Box from "../Box";
import HeadingOverline from "../HeadingOverline";
import Heading from "../Heading";

const ActiveWeatherDetails = ({ activeWeather }) => {
  return (
    <UpperSection>
      {Object.keys(activeWeather).length !== 0 ? (
        <>
          <SvgWrapper size="big">
            {activeWeather.weather[0].main === "Clear" ? <Sun /> : <Cloud />}
          </SvgWrapper>
          <Flex direction="column" justify="between">
            <Flex justify="between">
              <HeadingOverline>
                {activeWeather?.weather[0]?.main}
              </HeadingOverline>
              <HeadingOverline>
                {kelvinToCelsius(activeWeather.main.temp_max)} /{" "}
                {kelvinToCelsius(activeWeather.main.temp_min)}
              </HeadingOverline>
            </Flex>
            <Heading size="xl" topSpaced px data-testid="active-weather-degree">
              {kelvinToCelsius(activeWeather.main.temp)}
            </Heading>
          </Flex>
          <Flex direction="column">
            <HeadingOverline>Munich</HeadingOverline>
            <Flex direction="column">
              <Heading size="lg">
                {pluckNameFromDate(activeWeather.dt_txt)}
              </Heading>
              <Heading size="lg">
                {pluckDayAndMonth(activeWeather.dt_txt)}
              </Heading>
            </Flex>
          </Flex>
        </>
      ) : (
        <Box>Please make a selection to see the details</Box>
      )}
    </UpperSection>
  );
};

export default ActiveWeatherDetails;
