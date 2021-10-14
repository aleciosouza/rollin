import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, defaultTheme } from "../styledComponents/globalStyle";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
