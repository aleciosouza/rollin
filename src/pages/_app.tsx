import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, defaultTheme } from "../styles/globalStyle";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
