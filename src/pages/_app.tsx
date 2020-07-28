import React from "react";
import App from "next/app";
import { MediaQueryProvider } from "../ts/MediaQueryContext";

export default class _App extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <MediaQueryProvider>
        <Component {...pageProps} />
      </MediaQueryProvider>
    );
  }
}
