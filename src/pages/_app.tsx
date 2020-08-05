import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import { MediaQueryProvider } from "../client/ts/MediaQueryContext";
import { configureStore } from "../server/settings/store";

export default class _App extends App {
  render() {
    const store = configureStore();
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <MediaQueryProvider>
          <Component {...pageProps} />
        </MediaQueryProvider>
      </Provider>
    );
  }
}
