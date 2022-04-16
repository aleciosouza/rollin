import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import AppProvider from "../components/App/AppContext";
import { GlobalStyle, defaultTheme } from "../styles/globalStyle";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppProvider lang="pt-br">
        <Component {...pageProps} />
      </AppProvider>
    </ThemeProvider>
  );
};

export default MyApp;
