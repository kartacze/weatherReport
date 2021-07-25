import React from "react";

import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate } from "react-query/hydration";

import "../styles/main.css";

/* eslint-disable react/jsx-props-no-spreading */
const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <div className="antialiased w-full text-gray-700 h-screen flex flex-col">
          <Component {...pageProps} />
        </div>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
export default MyApp;
