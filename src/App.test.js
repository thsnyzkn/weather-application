import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, screen, waitFor, within } from './test-utils';
import mockData from './api/mock-data.json';
import App from './App';
export const handlers = [
  rest.get(
    'http://localhost:3000/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22',
    (req, res, ctx) => {
      return res(ctx.json(mockData), ctx.status(200), ctx.delay(1000));
    }
  ),
];
const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('fetches all the weather information when the component mounts and then detailed info about selected weather', async () => {
  render(<App />);
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  await waitFor(() => screen.getByRole('main'));
  expect(
    await screen.findByText(/Please make a selection to see the details/i)
  ).toBeInTheDocument();
  const list = screen.getByRole('list');
  const { getAllByRole } = within(list);
  const items = getAllByRole('listitem');
  expect(items.length).toBe(36);
  const randomElementIndex = Math.floor(Math.random() * items.length) + 1;
  const weatherToBeSelected = items[randomElementIndex];

  fireEvent.click(weatherToBeSelected);
  expect(
    screen.queryByText(/Please make a selection to see the details/i)
  ).not.toBeInTheDocument();
  const { getByRole } = within(weatherToBeSelected);
  const button = await waitFor(() => getByRole('button'));

  const degreeValueOfActive = screen.getByTestId('active-weather-degree');
  expect(within(button).getByTestId(/small-weather-degree/i)).toHaveTextContent(
    degreeValueOfActive.textContent
  );
});
