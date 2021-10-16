import { BigNumber } from "ethers";
import React, { Dispatch, useState } from "react";
import { Actions, Player, Region, Settings } from "../interfaces/interfaces";
import getActionInterfaces from "../utils/getActionInterfaces";
import { getFactionColor } from "../utils/regionTileUtils";
import ActionButton from "./ActionButton";
import DeployPlebInterface from "./DeployPlebInterface";
import {
  DefaultDualActionModalProps,
  DualActionModalProps,
} from "./DualActionModal";
import Spoiler from "./Spoiler";
import CustomTooltip from "./Tooltip";

interface RegionInfoProps {
  region: Region;
  selectActiveRegion: (region: Region) => void;
  selected: boolean;
  player: Player | undefined;
  setModal: Dispatch<DualActionModalProps>;
  actions: Actions;
  regionFrom: number | null;
  settings: Settings;
  blockTime: number;
}

export default function RegionInfo({
  region,
  selectActiveRegion,
  selected,
  player,
  setModal,
  actions,
  regionFrom,
  settings,
  blockTime,
}: RegionInfoProps): JSX.Element {
  const [workerToDeploy, setWorkerToDeploy] = useState<BigNumber>(
    BigNumber.from("0")
  );
  const [soldierForGarrison, setSoldierForGarrison] = useState<BigNumber>(
    BigNumber.from("0")
  );
  const [soldierForAttack, setSoldierForAttack] = useState<BigNumber>(
    BigNumber.from("0")
  );

  function updateWorkerToDeploy(value: string): void {
    if (settings?.plebForWorker === undefined) {
      return;
    }
    if (value === "") {
      value = "0";
    }
    setWorkerToDeploy(BigNumber.from(value));
  }

  function updateSoldierForGarrison(value: string): void {
    if (settings?.plebForSoldier === undefined) {
      return;
    }
    if (value === "") {
      value = "0";
    }
    setSoldierForGarrison(BigNumber.from(value));
  }

  function updateSoldierForAttack(value: string): void {
    if (settings?.plebForSoldier === undefined) {
      return;
    }
    if (value === "") {
      value = "0";
    }
    setSoldierForAttack(BigNumber.from(value));
  }

  return (
    <div className="pt-20 bg-gray-800 text-white min-h-full">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row px-4 items-center">
          <h2 className="text-3xl font-bold">Region {region?.id}</h2>
          <div
            className={`w-6 h-6 ml-2 ${getFactionColor(region?.controlledBy)}`}
          ></div>
        </div>
        {selected && (
          <p
            className="text-2xl cursor-pointer mr-4 mt-1"
            onClick={(e) => selectActiveRegion(region)}
          >
            X
          </p>
        )}
      </div>
      <div className="px-4 pt-2">
        <div className="pt-6">
          <Spoiler
            title={
              <div className="flex flex-row items-center">
                <p>Production</p>
                <CustomTooltip id="Production">
                  <div className="w-60">
                    <p>
                      There are 5 TIERS of regions. The TIER of a region
                      determines how many worker can be deployed and how much
                      PLEB each worker produces.
                    </p>
                    <br />
                    <p>
                      Once all AVAILABLE SLOTS for worker are gone the region
                      needs to be leveled up to the next TIER.
                    </p>
                    <br />
                    <p>
                      The rate of PLEB per worker per second is determined as
                      PLEB_RATE / TOTAL_WORKER.
                    </p>
                  </div>
                </CustomTooltip>
              </div>
            }
            visibleOnLoad
          >
            <li className="list-none space-y-1">
              <ul className="flex flex-row items-center mt-2">
                <p className="text-gray-500 w-1/3 mr-6">Tier:</p>{" "}
                <p className="text-gray-200">{region?.tier}</p>
              </ul>
              {player && region.controlledBy === player.faction && (
                <ul className="flex flex-row items-center">
                  <p className="text-gray-500 w-1/3 mr-6 leading-tight">
                    Available Workslots:
                  </p>{" "}
                  <p className="text-gray-200">
                    +
                    {region.tierSettings.workerLimit
                      .sub(region?.totalWorker)
                      .toString()}
                  </p>
                </ul>
              )}
              <ul className="flex flex-row items-center">
                <p className="text-gray-500 w-1/3 mr-6">Total Worker:</p>
                <p className="text-gray-200">
                  {region?.totalWorker?.toString()}
                </p>
              </ul>

              {player && region.controlledBy === player.faction && (
                <>
                  <ul className="flex flex-row items-center">
                    <p className="text-gray-500 w-1/3 mr-6">Your Worker:</p>{" "}
                    <p className="text-gray-200">
                      {region?.worker?.toString()}
                    </p>
                  </ul>
                  <ul className="flex flex-row items-center">
                    <p className="text-gray-500 w-1/3 mr-6">Pleb per Worker:</p>{" "}
                    <p className="text-gray-200">
                      {region?.totalWorker.gt(0)
                        ? region?.tierSettings?.plebPerSec
                            .div(region?.totalWorker)
                            .toString()
                        : 0}
                      /s
                    </p>
                  </ul>
                  {region.worker.gt(0) && (
                    <ul className="flex flex-row items-center">
                      <p className="text-gray-500 w-1/3 mr-6">You earn:</p>{" "}
                      <p className="text-gray-200">
                        {region?.totalWorker.gt(0)
                          ? region?.tierSettings?.plebPerSec
                              .div(region?.totalWorker)
                              .mul(region?.worker)
                              .toString()
                          : 0}{" "}
                        Pleb/s
                      </p>
                    </ul>
                  )}
                </>
              )}
            </li>
          </Spoiler>
        </div>
        <div className="pt-8">
          <Spoiler
            title={
              <div className="flex flex-row items-center">
                <p>Military</p>
                <CustomTooltip id="Military">
                  <div className="w-60">
                    <p>Garrison are the defending forces of a region.</p>
                    <p>
                      They are also used to level up a region into its next
                      tier.
                    </p>
                    {region?.cantGetAttackedTill > blockTime && (
                      <>
                        <br />
                        <p>
                          If a region has recently been successfully defended,
                          it CANT BE ATTACKED till the timer runs out.
                        </p>
                      </>
                    )}
                    <br />
                    <p>
                      For attacks or as garrison, it always costs more PLEB to
                      deploy SOLDIER than worker.
                    </p>
                  </div>
                </CustomTooltip>
              </div>
            }
            visibleOnLoad
          >
            <li className="list-none space-y-1">
              <ul className="flex flex-row items-center">
                <p className="text-gray-500 w-1/3 mr-6">Garrison</p>
                <p className="text-gray-200">{region?.garrison?.toString()}</p>
              </ul>
              {region?.tier < 4 && (
                <ul className="flex flex-row items-center">
                  <p className="text-gray-500 w-1/3 mr-6">
                    Garrison to lvl up:
                  </p>
                  <p className="text-gray-200">
                    +
                    {settings.regionTiers[region?.tier + 1]?.requiredGarrison
                      .sub(region?.garrison)
                      .toString()}
                  </p>
                </ul>
              )}
              {region?.cantGetAttackedTill > blockTime && (
                <ul className="flex flex-row items-center">
                  <p className="text-gray-500 w-1/3 mr-6">
                    Attack cooldown ends in:
                  </p>
                  <p className="text-gray-200">
                    {`${
                      region.cantGetAttackedTill - blockTime > 3600
                        ? new Date(
                            (region.cantGetAttackedTill - blockTime) * 1000
                          ).getUTCHours() + " :"
                        : "00 :"
                    }
          ${
            region.cantGetAttackedTill - blockTime > 60
              ? new Date(
                  (region.cantGetAttackedTill - blockTime) * 1000
                ).getUTCMinutes() + " :"
              : "00 :"
          } 
          ${
            (region.cantGetAttackedTill - blockTime) % 60 === 0
              ? "00"
              : new Date(
                  (region.cantGetAttackedTill - blockTime) * 1000
                ).getUTCSeconds()
          }`}
                  </p>
                </ul>
              )}
            </li>
          </Spoiler>
        </div>
        {region.besieged && region?.siege !== undefined && (
          <div className="pt-8">
            <Spoiler
              title={
                <div className="flex flex-row items-center">
                  <p>Siege</p>
                  <CustomTooltip id="Siege">
                    <div className="w-60">
                      <p>
                        When a region gets attacked its BESIEGED. A SIEGE has
                        two parts. First the RALLY and second the actual fight.
                      </p>
                      <br />
                      <p>
                        During the RALLY phase everyone can simply ADD TROOPS to
                        the DEFENDER or ATTACKER without consequences. After the
                        RALLY phase if one side has OVERHWELMINGLY more soldier
                        than the other side, they can immedately END the BATTLE
                        and WIN.
                      </p>
                      <br />
                      <p>
                        The battle will also end AUTOMATICALLY after the
                        BATTLE_TIME is over. The ATTACKER will at this point
                        need to have MORE SOLDIER in the region than the
                        DEFENDER to win.
                      </p>
                      <br />
                      <p>
                        The winner will overtake the region and all their
                        remaining soldier will be allocated as GARRISON. The
                        regions TIER + PRODUCTION will be resetted. If the
                        attacker win there wont be any ATTACK_COOLDOWN.
                      </p>
                      <br />
                      <p>
                        If one side wins OVERHWELMINGLY they do not only win
                        IMMEDATELY but also loose far less troops.
                      </p>
                      <br />
                      <p>
                        You can support attacks and defences of other factions
                        but this will NOT give your faction control over the
                        region.
                      </p>
                    </div>
                  </CustomTooltip>
                </div>
              }
              visibleOnLoad
            >
              <li className="list-none space-y-1">
                <ul className="flex flex-row items-center">
                  <p className="text-gray-500 w-1/3 mr-6">Battle ends in:</p>
                  <p className="text-gray-200">
                    {`${
                      region.siege.attackedAt + settings.siegeTime - blockTime >
                      3600
                        ? new Date(
                            (region.siege.attackedAt +
                              settings.siegeTime -
                              blockTime) *
                              1000
                          ).getUTCHours() + " :"
                        : "00 :"
                    }
          ${
            region.siege.attackedAt + settings.siegeTime - blockTime > 60
              ? new Date(
                  (region.siege.attackedAt + settings.siegeTime - blockTime) *
                    1000
                ).getUTCMinutes() + " :"
              : "00 :"
          } 
          ${
            (region.siege.attackedAt + settings.siegeTime - blockTime) % 60 ===
            0
              ? "00"
              : new Date(
                  (region.siege.attackedAt + settings.siegeTime - blockTime) *
                    1000
                ).getUTCSeconds()
          }`}
                  </p>
                </ul>
                {region.siege.attackedAt + settings.rallyTime > blockTime && (
                  <ul className="flex flex-row items-center">
                    <p className="text-gray-500 w-1/3 mr-6">Rally ends in:</p>
                    <p className="text-gray-200">
                      {`${
                        region.siege.attackedAt +
                          settings.rallyTime -
                          blockTime >
                        3600
                          ? new Date(
                              (region.siege.attackedAt +
                                settings.rallyTime -
                                blockTime) *
                                1000
                            ).getUTCHours() + " :"
                          : "00 :"
                      }
          ${
            region.siege.attackedAt + settings.rallyTime - blockTime > 60
              ? new Date(
                  (region.siege.attackedAt + settings.rallyTime - blockTime) *
                    1000
                ).getUTCMinutes() + " :"
              : "00 :"
          } 
          ${
            (region.siege.attackedAt + settings.rallyTime - blockTime) % 60 ===
            0
              ? "00"
              : new Date(
                  (region.siege.attackedAt + settings.rallyTime - blockTime) *
                    1000
                ).getUTCSeconds()
          }`}
                    </p>
                  </ul>
                )}
                <ul className="flex flex-row items-center pt-2">
                  <p className="text-gray-500 w-1/3 mr-6">Status:</p>
                  <div className="w-1/2 flex flex-row items-center">
                    <div className="w-5/12 flex flex-col items-center">
                      <p className="text-sm text-gray-200">Attacker</p>
                      <p className="text-gray-200">
                        {region?.siege.soldier.toString()}
                      </p>
                      <div
                        className={`w-full h-4 border  ${getFactionColor(
                          region?.siege?.attacker
                        )}`}
                      ></div>
                    </div>
                    <p className="w-2/12 text-center">vs</p>
                    <div className="w-5/12 flex flex-col items-center">
                      <p className="text-sm text-gray-200">Defender</p>
                      <p className="text-gray-200">
                        {region?.garrison.toString()}
                      </p>
                      <div
                        className={`w-full h-4  ${getFactionColor(
                          region?.controlledBy
                        )}`}
                      ></div>
                    </div>
                  </div>
                </ul>
              </li>
            </Spoiler>
          </div>
        )}
      </div>
      <div className="w-full border-b border-gray-600 py-2"></div>
      {player && region?.interactable && (
        <>
          <h2 className="px-4 pt-6 pb-2 text-xl text-gray-200 font-bold">
            Actions
          </h2>
          <div className="flex flex-col space-y-6 px-4">
            {region?.claimablePleb.gt(0) && (
              <ActionButton
                label="Claim Pleb"
                disabled={false}
                onClick={() =>
                  setModal({
                    content: `You are about to claim atleast ${region?.claimablePleb.toString()} Pleb.`,
                    title: "Claim Pleb",
                    onConfirm: {
                      label: "Claim",
                      onClick: () => {
                        setModal(DefaultDualActionModalProps);
                        actions.claim(region.id);
                      },
                    },
                    onDismiss: {
                      label: "Cancel",
                      onClick: () => {
                        setModal(DefaultDualActionModalProps);
                      },
                    },
                    visible: true,
                  })
                }
              />
            )}
            <>
              {getActionInterfaces(
                region,
                player,
                settings,
                blockTime,
                {
                  worker: {
                    value: workerToDeploy,
                    update: updateWorkerToDeploy,
                  },
                  garrison: {
                    value: soldierForGarrison,
                    update: updateSoldierForGarrison,
                  },
                  attack: {
                    value: soldierForAttack,
                    update: updateSoldierForAttack,
                  },
                },
                actions,
                regionFrom
              ).map((action) => (
                <Spoiler title={<p>{action.title}</p>} key={action.title}>
                  <DeployPlebInterface
                    label={action.title}
                    inputPlaceholder={action.inputPlaceholder}
                    plebBalance={player?.plebBalance}
                    disabled={action.disabled}
                    value={action.actionValue.value}
                    updateValue={action.actionValue.update}
                    onClick={() =>
                      setModal({
                        content: action.content,
                        title: action.title,
                        onConfirm: {
                          label: action.title,
                          onClick: () => {
                            setModal(DefaultDualActionModalProps);
                            action.action();
                          },
                        },
                        onDismiss: {
                          label: "Cancel",
                          onClick: () => {
                            setModal(DefaultDualActionModalProps);
                          },
                        },
                        visible: true,
                      })
                    }
                  />
                </Spoiler>
              ))}
            </>
          </div>
        </>
      )}
    </div>
  );
}
