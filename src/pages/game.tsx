import { Web3Provider } from "@ethersproject/providers";
import { parseEther } from "@ethersproject/units";
import { useWeb3React } from "@web3-react/core";
import { BigNumber, ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import toast, { Toaster } from "react-hot-toast";
import SettingsInfo from "src/components/SettingsInfo";
import DualActionModal, {
  DefaultDualActionModalProps,
  DualActionModalProps,
} from "../components/DualActionModal";
import PlayerInfo from "../components/PlayerInfo";
import RegionInfo from "../components/RegionInfo";
import RegionTile from "../components/RegionTile";
import { connectors } from "../context/connectors";
import { Contracts, ContractsContext } from "../context/contracts";
import { Player, Region, Settings } from "../interfaces/interfaces";
import getPlayer from "../utils/getPlayer";
import getRegionFrom from "../utils/getRegionFrom";
import getRegions from "../utils/getRegions";
import getSettings from "../utils/getSettings";

export default function Game(): JSX.Element {
  const context = useWeb3React<Web3Provider>();
  const provider = ethers.getDefaultProvider();
  const { library, account, activate } = context;
  const { contracts } = useContext(ContractsContext);
  const [settings, setSettings] = useState<Settings>();
  const [regions, setRegions] = useState<Region[]>();
  const [regionLayout, setRegionLayout] = useState<number[][]>();
  const [player, setPlayer] = useState<Player>();
  const [activeRegion, setActiveRegion] = useState<Region | null>(null);
  const [hoverRegion, setHoverRegion] = useState<Region>();
  const [modal, setModal] = useState<DualActionModalProps>(
    DefaultDualActionModalProps
  );
  const [blockTime, setBlockTime] = useState<number>();
  const [secToUpdate, setSecToUpdate] = useState<number>(30);

  useEffect(() => {
    const updateInterval = setInterval(() => {
      if (contracts?.risk && contracts?.pleb && account && settings) {
        provider.getBlock("latest").then((res) => setBlockTime(res.timestamp));
        getPlayer(contracts, account).then(
          (res) => res[1] && setPlayer(res[0])
        );
        getRegions(contracts as Contracts, settings, blockTime, player).then(
          (res) => setRegions(res[0])
        );
      }
    }, 30000);

    const timerInterval = setInterval(() => {
      if (contracts?.risk && contracts?.pleb && account) {
        setSecToUpdate((secToUpdate) =>
          secToUpdate === 0 ? 30 : secToUpdate - 1
        );
        setBlockTime((blockTime) => blockTime + 1);
      }
    }, 1000);

    return () => {
      clearInterval(updateInterval);
      clearInterval(timerInterval);
    };
  }, [account]);

  useEffect(() => {
    if (contracts?.risk && contracts?.pleb && account) {
      getSettings(contracts).then((res: any) => setSettings(res));
      getPlayer(contracts, account).then((res) => res[1] && setPlayer(res[0]));
      provider.getBlock("latest").then((res) => setBlockTime(res.timestamp));
    }
  }, [contracts, account]);

  useEffect(() => {
    if (!settings || settings === undefined) {
      return;
    }
    getRegions(contracts as Contracts, settings, blockTime, player).then(
      (res) => {
        setRegions(res[0]);
        setRegionLayout(res[1]);
      }
    );
  }, [settings]);

  function selectActiveRegion(region: Region): void {
    if (activeRegion && activeRegion?.id === region.id) {
      setActiveRegion(null);
    } else {
      setActiveRegion(region);
    }
  }

  async function claimPleb(regionTo: number): Promise<void> {
    if (
      library === undefined ||
      account === undefined ||
      player === undefined
    ) {
      return;
    }
    toast.loading("Claiming Pleb...");
    const res = await contracts?.risk
      .connect(library.getSigner())
      .claimPleb(regionTo, 0, account as string)
      .then((res: any) => {
        res.wait().then((res: any) => {
          toast.dismiss();
          toast.success("Claimed Pleb!");
        });
      })
      .catch((err: any) => {
        toast.dismiss();
        if (err.data === undefined) {
          toast.error("An error occured");
        } else {
          toast.error(err.data.message.split("'")[1]);
        }
      });
    contracts.pleb.balanceOf(account).then((res) =>
      setPlayer((player) => {
        return {
          address: player.address,
          faction: player.faction,
          plebAllowance: player.plebAllowance,
          plebBalance: player.plebBalance,
        };
      })
    );
    getRegions(contracts as Contracts, settings, blockTime, player).then(
      (res) => {
        setRegions((prevState) => res[0]);
        setRegionLayout((prevState) => res[1]);
      }
    );
  }

  async function deployWorker(
    regionTo: number,
    worker: BigNumber
  ): Promise<void> {
    if (
      library === undefined ||
      account === undefined ||
      player === undefined
    ) {
      return;
    }
    toast.loading("Deploying Worker...");
    const res = await contracts?.risk
      .connect(library.getSigner())
      .deployWorker(regionTo, worker)
      .then((res: any) => {
        res.wait().then((res: any) => {
          toast.dismiss();
          toast.success("Deployed Worker!");
        });
      })
      .catch((err: any) => {
        toast.dismiss();
        if (err.data === undefined) {
          toast.error("An error occured");
        } else {
          toast.error(err.data.message.split("'")[1]);
        }
      });
    contracts.pleb.balanceOf(account).then((res) =>
      setPlayer((player) => {
        return {
          address: player.address,
          faction: player.faction,
          plebAllowance: player.plebAllowance,
          plebBalance: player.plebBalance,
        };
      })
    );
    getRegions(contracts as Contracts, settings, blockTime, player).then(
      (res) => {
        setRegions((prevState) => res[0]);
        setRegionLayout((prevState) => res[1]);
      }
    );
  }

  async function deployGarrison(
    regionTo: number,
    regionFrom: number,
    soldier: BigNumber,
    resolve: boolean
  ): Promise<void> {
    if (
      library === undefined ||
      account === undefined ||
      player === undefined
    ) {
      return;
    }
    toast.loading("Deploying Soldier...");
    const res = await contracts?.risk
      .connect(library.getSigner())
      .deployGarrison(regionTo, regionFrom, soldier, resolve)
      .then((res: any) => {
        res.wait().then((res: any) => {
          toast.dismiss();
          toast.success("Deployed Soldier!");
        });
      })
      .catch((err: any) => {
        toast.dismiss();
        if (err.data === undefined) {
          toast.error("An error occured");
        } else {
          toast.error(err.data.message.split("'")[1]);
        }
      });
    contracts.pleb.balanceOf(account).then((res) =>
      setPlayer((player) => {
        return {
          address: player.address,
          faction: player.faction,
          plebAllowance: player.plebAllowance,
          plebBalance: player.plebBalance,
        };
      })
    );
    getRegions(contracts as Contracts, settings, blockTime, player).then(
      (res) => {
        setRegions((prevState) => res[0]);
        setRegionLayout((prevState) => res[1]);
      }
    );
  }

  async function attackRegion(
    regionTo: number,
    regionFrom: number,
    soldier: BigNumber,
    resolve: boolean
  ): Promise<void> {
    if (
      library === undefined ||
      account === undefined ||
      player === undefined
    ) {
      return;
    }
    toast.loading("Attacking Region...");
    const res = await contracts?.risk
      .connect(library.getSigner())
      .attack(regionTo, regionFrom, soldier, resolve)
      .then((res: any) => {
        res.wait().then((res: any) => {
          toast.dismiss();
          toast.success("Attacking Region!");
        });
      })
      .catch((err: any) => {
        toast.dismiss();
        if (err.data === undefined) {
          toast.error("An error occured");
        } else {
          toast.error(err.data.message.split("'")[1]);
        }
      });
    contracts.pleb.balanceOf(account).then((res) =>
      setPlayer((player) => {
        return {
          address: player.address,
          faction: player.faction,
          plebAllowance: player.plebAllowance,
          plebBalance: player.plebBalance,
        };
      })
    );
    getRegions(contracts as Contracts, settings, blockTime, player).then(
      (res) => {
        setRegions((prevState) => res[0]);
        setRegionLayout((prevState) => res[1]);
      }
    );
  }

  async function joinGame(): Promise<void> {
    toast.loading("Joining Game...");
    contracts?.risk
      ?.connect(library?.getSigner() as any)
      .joinGame({ value: settings?.ticketPrice })
      .then((res: any) => {
        res.wait().then((res: any) => {
          toast.dismiss();
          toast.success("You joined the game!");
        });
      })
      .catch((err: any) => {
        toast.dismiss();
        if (err.data === undefined) {
          toast.error("An error occured");
        } else {
          toast.error(err.data.message.split("'")[1]);
        }
      });
    getPlayer(contracts, account).then(
      (res) => res[1] && setPlayer((prevState) => res[0])
    );
    getRegions(contracts as Contracts, settings, blockTime, player).then(
      (res) => {
        setRegions((prevState) => res[0]);
        setRegionLayout((prevState) => res[1]);
      }
    );
  }

  async function approve(): Promise<void> {
    if (
      library === undefined ||
      account === undefined ||
      player === undefined
    ) {
      return;
    }
    toast.loading("Approving Pleb...");
    await contracts?.pleb
      .connect(library.getSigner())
      .approve(
        contracts?.risk.address,
        BigNumber.from(
          "115792089237316195423570985008687907853269984665640564039457584007913129639935"
        ) //unlimited approval
      )
      .then((res) => {
        res.wait().then((res) => {
          toast.dismiss();
          toast.success("Pleb approved!");
        });
      })
      .catch((err) => {
        toast.dismiss();
        if (err.data === undefined) {
          toast.error("An error occured");
        } else {
          toast.error(err.data.message.split("'")[1]);
        }
      });
    setPlayer({
      address: player.address,
      faction: player.faction,
      plebBalance: player.plebBalance,
      plebAllowance: BigNumber.from(
        "115792089237316195423570985008687907853269984665640564039457584007913129639935"
      ),
    });
  }

  return (
    <div className="w-full overflow-hidden">
      <DualActionModal {...modal} />
      <Toaster position="top-right" />
      <div className="w-full flex flex-row">
        <div className="h-screen w-2/12 z-10">
          {(activeRegion || hoverRegion !== undefined) && (
            <RegionInfo
              region={activeRegion ? activeRegion : (hoverRegion as Region)}
              selectActiveRegion={selectActiveRegion}
              selected={!!activeRegion}
              player={player}
              setModal={setModal}
              actions={{
                claim: claimPleb,
                deployWorker: deployWorker,
                deployGarrison: deployGarrison,
                attack: attackRegion,
              }}
              regionFrom={getRegionFrom(
                activeRegion ? activeRegion : (hoverRegion as Region),
                regions,
                player?.faction
              )}
              settings={settings as Settings}
              blockTime={blockTime}
            />
          )}
        </div>
        <div className="w-10/12 min-h-full bg-gray-200">
          <div className="w-full h-16 flex flex-row bg-white shadow justify-evenly">
            <div className="w-2/6"></div>
            <div className="w-2/6 flex flex-row items-center">
              {account && player ? (
                <>
                  <PlayerInfo playerInfo={player} />
                  {player.plebAllowance.lt(
                    parseEther("1000000000000000000")
                  ) && (
                    <button
                      type="button"
                      className="ml-4 px-6 py-2 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={(e) => approve()}
                    >
                      Approve PLB
                    </button>
                  )}
                </>
              ) : (
                <button
                  type="button"
                  className="ml-24 px-6 py-2 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={(e) =>
                    account ? joinGame() : activate(connectors.Injected)
                  }
                >
                  {account ? "Join Game" : "Connect"}
                </button>
              )}
            </div>
            <div className="w-2/6 flex flex-row justify-end items-center">
              <div className="pr-40 flex flex-row">
                {settings && <SettingsInfo settings={settings} />}
                <a href="/">
                  <svg
                    className="text-gray-500 ml-2 w-6 h-6 cursor-pointer hover:text-gray-300"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="question-circle"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    stroke="currentColor"
                  >
                    <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {regions !== undefined &&
            regions?.length > 0 &&
            regionLayout !== undefined &&
            regionLayout?.length > 0 && (
              <>
                <table className="m-8">
                  <tbody>
                    <tr>
                      <th></th>
                      {(regionLayout[0] as number[]).map((x, i) => (
                        <th key={`column-${i}`} className="text-gray-600">
                          {i}
                        </th>
                      ))}
                    </tr>
                    {regionLayout?.map((row: number[], i) => (
                      <tr key={`row-${i}`}>
                        <th className="px-2 text-gray-600">{i}</th>
                        {row.map((id, i) => (
                          <RegionTile
                            key={`region-${regions[id]?.id}`}
                            region={regions[id] as Region}
                            selectActiveRegion={selectActiveRegion}
                            setHoverRegion={setHoverRegion}
                            selected={
                              !!(
                                activeRegion &&
                                activeRegion.id === (regions[id] as Region).id
                              )
                            }
                          />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="absolute z-10 w-20 h-20 mr-20 mb-20 right-0 bottom-0">
                  <CircularProgressbar
                    value={(100 / 30) * secToUpdate}
                    text={`${secToUpdate}s`}
                  />
                </div>
              </>
            )}
        </div>
      </div>
    </div>
  );
}
