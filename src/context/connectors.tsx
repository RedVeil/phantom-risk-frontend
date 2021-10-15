import { InjectedConnector } from '@web3-react/injected-connector';
import { NetworkConnector } from '@web3-react/network-connector';

export const networkMap = {
  250: 'fantom',
  1337: 'localhost',
  31337: 'localhost',
};

const Injected = new InjectedConnector({
  supportedChainIds: [31337, 250, 1337],
});

const Network = new NetworkConnector({
  urls: {
    [31337]: process.env.RPC_URL as string,
  },
  defaultChainId: 31337,
});

export const connectors = { Injected, Network };