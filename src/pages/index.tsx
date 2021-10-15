import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { BigNumber, utils } from "ethers";
import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
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

//TODO Join game
//TODO connect to actual network
//TODO refresh game state

const Index = () => {
  const context = useWeb3React<Web3Provider>();
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

  // useEffect(() => {
  //   setRegions(DummyData[0] as Region[]);
  //   setRegionLayout(DummyData[1] as number[][]);
  //   setPlayer(DummyData[2] as Player);
  //   setSettings(DummyData[3] as Settings);
  // }, []);

  useEffect(() => {
    if (contracts?.risk && contracts?.pleb && account) {
      getSettings(contracts).then((res: any) => setSettings(res));
      getPlayer(contracts, account).then((res) => res[1] && setPlayer(res[0]));
    }
  }, [contracts, account, player]);

  useEffect(() => {
    if (settings === undefined) {
      return;
    }
    getRegions(contracts as Contracts, settings, player).then((res) => {
      setRegions(res[0]);
      setRegionLayout(res[1]);
    });
  }, [settings]);

  function selectActiveRegion(region: Region): void {
    if (activeRegion && activeRegion?.id === region.id) {
      setActiveRegion(null);
    } else {
      setActiveRegion(region);
    }
  }

  async function claimPleb(regionTo: number): Promise<void> {
    if (library === undefined || account === undefined) {
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
  }

  async function deployWorker(
    regionTo: number,
    worker: BigNumber
  ): Promise<void> {
    if (library === undefined || account === undefined) {
      return;
    }
    if (player?.plebAllowance !== undefined && player?.plebAllowance < worker) {
      await approve();
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
  }

  async function deployGarrison(
    regionTo: number,
    regionFrom: number,
    soldier: BigNumber,
    resolve: boolean
  ): Promise<void> {
    if (library === undefined || account === undefined) {
      return;
    }
    if (
      player?.plebAllowance !== undefined &&
      player?.plebAllowance < soldier
    ) {
      await approve();
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
  }

  async function attackRegion(
    regionTo: number,
    regionFrom: number,
    soldier: BigNumber,
    resolve: boolean
  ): Promise<void> {
    if (library === undefined || account === undefined) {
      return;
    }
    if (
      player?.plebAllowance !== undefined &&
      player?.plebAllowance < soldier
    ) {
      await approve();
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
  }

  async function approve(): Promise<void> {
    if (library === undefined || account === undefined) {
      return;
    }
    toast.loading("Approving Pleb...");
    await contracts?.pleb
      .connect(library.getSigner())
      .approve(contracts?.risk.address, utils.parseEther("100000000"))
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
  }

  return (
    <div>
      <div className="w-full">
        <DualActionModal {...modal} />
        <Toaster position="top-right" />
        <div className="w-full flex flex-row">
          <div className="h-screen w-2/12">
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
                plebForSoldier={settings?.plebForSoldier}
                settings={settings as Settings}
                blockTime={1633700421}
              />
            )}
          </div>
          <div className="w-10/12 bg-gray-200">
            <div className="w-full h-16 flex flex-row bg-white shadow">
              <div className="w-2/6"></div>
              <div className="w-1/6 flex flex-row items-center justify-between">
                {account && player ? (
                  <PlayerInfo playerInfo={player} />
                ) : (
                  <button
                    type="button"
                    className="mx-auto px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={(e) =>
                      account
                        ? contracts?.risk
                            ?.connect(library?.getSigner() as any)
                            .joinGame({ value: settings?.ticketPrice })
                        : activate(connectors.Injected)
                    }
                  >
                    {account ? "Join Game" : "Connect"}
                  </button>
                )}
              </div>
            </div>
            {regions !== undefined &&
              regions?.length > 0 &&
              regionLayout !== undefined &&
              regionLayout?.length > 0 && (
                <table className="m-8">
                  <tbody>
                    <tr>
                      <th></th>
                      {(regionLayout[0] as number[]).map((x, i) => (
                        <th key={`column-${i}`}>{i}</th>
                      ))}
                    </tr>
                    {regionLayout?.map((row: number[], i) => (
                      <tr key={`row-${i}`}>
                        <th className="px-2">{i}</th>
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
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
