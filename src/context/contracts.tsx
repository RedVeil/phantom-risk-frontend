import { Web3Provider } from '@ethersproject/providers';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { PhantomRiskV1 } from '../../typechain/PhantomRiskV1';
import { PhantomRiskV1__factory } from '../../typechain/PhantomRiskV1__factory';
import { Pleb } from '../../typechain/Pleb';
import { Pleb__factory } from '../../typechain/Pleb__factory';
import { connectors, networkMap } from './connectors';

export interface Contracts {
  pleb:Pleb;
  risk:PhantomRiskV1
}

interface ContractsContext {
  contracts: Contracts | undefined;
  setContracts: React.Dispatch<Contracts>;
}

export const ContractsContext = createContext<ContractsContext>(null);

interface ContractsWrapperProps {
  children: React.ReactNode;
}

function getErrorMessage(error: Error) {
  if (error instanceof NoEthereumProviderError) {
    return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.';
  } else if (error instanceof UnsupportedChainIdError) {
    return `You're connected to an unsupported network. Please connect to ${
      networkMap[250]
    }.`;
  } else if (error instanceof UserRejectedRequestErrorInjected) {
    return 'Please authorize this website to access your Ethereum account.';
  } else {
    console.error(error);
    return 'An unknown error occurred. Check the console for more details.';
  }
}

export default function ContractsWrapper({
  children,
}: ContractsWrapperProps): JSX.Element {
  const context = useWeb3React<Web3Provider>();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context;
  const [contracts, setContracts] = useState<Contracts>();

  useEffect(() => {
    if (!active) {
      activate(connectors.Network);
    }
  }, [active]);


  useEffect(() => {
    if (!library) {
      return;
    }
    setContracts({
      pleb: Pleb__factory.connect(process.env.ADDR_PLEB as string, library),
      risk: PhantomRiskV1__factory.connect(
        process.env.ADDR_PHANTOM_RISKV1 as string,
        library,
      ),
    });
  }, [library, active]);

  return (
    <ContractsContext.Provider
      value={{
        contracts,
        setContracts,
      }}
    >
      {children}
    </ContractsContext.Provider>
  );
}
