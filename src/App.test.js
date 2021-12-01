import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, screen } from "./test-utils";
import mockData from "./api/mock-data.json";
import App from "./App";
export const handlers = [
  rest.get(
    "data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22",
    (req, res, ctx) => {
      const query = req.url.searchParams;
      const q = query.get("q");
      const appid = query.get("appid");
      return res(
        ctx.json(JSON.stringify(mockData)),
        ctx.delay(1500),
        ctx.status(202, "Mocked status")
      );
    }
  ),
  rest.get("/api/user", (req, res, ctx) => {
    return res(ctx.json("John Smith"), ctx.delay(150));
  }),
];
const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
test("fetches all the weather information when the component mounts", async () => {
  render(<App />);
});
