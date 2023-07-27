import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'sweetalert2/src/sweetalert2.scss'
import { useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "@/stores/graphql";
import MainLayout from "@/components/MainLayout";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/stores/store";
import { initCollection } from "@/stores/collections";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    store.dispatch(initCollection());
  }, []);
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </ApolloProvider>
  );
}
