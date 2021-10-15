import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import { AppProps } from "next/app";
import React from "react";
import ContractsWrapper from "../context/contracts";
import "../styles/main.css";

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

export default function PhantomRisk({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ContractsWrapper>
          <Component {...pageProps} />
        </ContractsWrapper>
      </Web3ReactProvider>
    </>
  );
}
