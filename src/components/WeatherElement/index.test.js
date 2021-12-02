import { render, fireEvent, screen, within, waitFor } from '../../test-utils';
import { formatDateToHour } from '../../utils';

import WeatherElement from './index';

const mockActiveWeather = {
  dt: 1487246400,
  main: {
    temp: 286.67,
    temp_min: 281.556,
    temp_max: 286.67,
    pressure: 972.73,
    sea_level: 1046.46,
    grnd_level: 972.73,
    humidity: 75,
    temp_kf: 5.11,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    },
  ],
  clouds: {
    all: 0,
  },
  wind: {
    speed: 1.81,
    deg: 247.501,
  },
  sys: {
    pod: 'd',
  },
  dt_txt: '2017-02-16 12:00:00',
};

test('can render correct icon based on weather type', () => {
  render(<WeatherElement weather={mockActiveWeather} />);
  const weatherType = mockActiveWeather.weather[0].main;
  expect(weatherType).toBe('Clear');
  expect(screen.getByTitle(/weather-sun/i)).toBeInTheDocument();
});

test('can convert Kelvin degree to celcius and display it correctly', () => {
  render(<WeatherElement weather={mockActiveWeather} />);
  const activeWeather = screen.getByTestId(/small-weather-degree/i).textContent;
  expect(activeWeather).toBe('13°');
});

test('can display day time correctly', () => {
  render(<WeatherElement weather={mockActiveWeather} />);
  const hour = formatDateToHour(mockActiveWeather.dt_txt);
  expect(screen.getByTestId('weather-hour').textContent).toBe(hour);
});
