import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import weatherReducer from "./features/weathers/weatherSlice";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: { weathers: weatherReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export { render };
