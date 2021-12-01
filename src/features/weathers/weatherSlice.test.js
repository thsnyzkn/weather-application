import reducer, { selectWeather } from "./weatherSlice";

test("should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual({
    weathers: [],
    status: "idle",
    error: null,
    activeWeather: {},
  });
});

test("should return the selected weather after clicking respective weather", () => {
  const previousState = {};
});
