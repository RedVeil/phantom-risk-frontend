import { InjectedConnector } from "@web3-react/injected-connector";
import { NetworkConnector } from "@web3-react/network-connector";

export const networkMap = {
  250: "fantom",
  4: "rinkeby",
  1337: "localhost",
  31337: "localhost",
};

const Injected = new InjectedConnector({
  supportedChainIds: [4, 31337, 250, 1337],
});

const Network = new NetworkConnector({
  urls: {
    [4]: process.env.RPC_URL as string,
  },
  defaultChainId: 4,
});

export const connectors = { Injected, Network };
