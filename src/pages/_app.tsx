import type { AppProps } from "next/app";

import AppProvider from "../components/App/AppContext";

import globalStyles from '../styles/stitches.config';

const MyApp = ({ Component, pageProps }: AppProps) => {  
  globalStyles();

  return (
    <AppProvider lang="pt-br">
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default MyApp;
