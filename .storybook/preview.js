import React from "react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/styles/global-styles";
import { theme } from "../src/styles/theme";

export const decorators = [
  Story => (
    <>
      <MemoryRouter initialEntries={["/"]}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {Story()}
        </ThemeProvider>
      </MemoryRouter>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
