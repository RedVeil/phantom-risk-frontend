import { BigNumber } from "ethers";
import React, { Dispatch } from "react";
import { Faction, OverwhelmingArmy, Region } from "../interfaces/interfaces";
import {
  getBorderForRegionTier,
  getFactionColor,
  getRegionBackgroundByFaction,
  getRegionHoverColorByFaction,
} from "../utils/regionTileUtils";

interface RegionTileProps {
  region: Region;
  selectActiveRegion: (region: Region) => void;
  setHoverRegion: Dispatch<Region>;
  selected: boolean;
}

export default function RegionTile({
  region,
  selectActiveRegion,
  setHoverRegion,
  selected,
}: RegionTileProps): JSX.Element {
  return (
    <td
      className={`${getRegionBackgroundByFaction(region.controlledBy, selected)}
      ${
        region.interactable ? "cursor-pointer" : "cursor-default"
      } ${getRegionHoverColorByFaction(region.controlledBy,selected)}
        ${getBorderForRegionTier(region.tier)} ${
        selected ? "shadow-md transform scale-110" : ""
      }
      `}
      onMouseMove={(e) => setHoverRegion(region)}
      onClick={(e) => region.interactable && selectActiveRegion(region)}
    >
      {region.besieged ? (
        <div className="flex flex-col px-3">
          <div className="w-full flex flex-row">
            <div className="flex flex-col justify-center">
              {region.siege?.overwhelm === OverwhelmingArmy.Defender && (
                <img
                  src="/assets/images/skullIconRegular.svg"
                  className="w-4 h-4 flex-shrink-0 flex-grow-0 mb-1"
                />
              )}
              {region.siege?.soldier.gt(region.garrison) && (
                <img
                  src="/assets/images/trophyIconRegular.svg"
                  className="w-4 h-4 flex-shrink-0 flex-grow-0 mb-1"
                />
              )}
              <div
                className={`w-4 h-4 border border-gray-700 ${getFactionColor(
                  region.siege?.attacker as Faction
                )}`}
              ></div>
            </div>
            <div className="flex flex-col justify-center flex-shrink-0 flex-grow-0 px-2">
              <img
                src="/assets/images/swordIconRegular.svg"
                className="w-4 h-4 flex-shrink-0 flex-grow-0"
              />
            </div>
            <div className="flex flex-col items-center">
              {region.siege?.overwhelm === OverwhelmingArmy.Attacker && (
                <img
                  src="/assets/images/skullIconRegular.svg"
                  className="w-4 h-4 flex-shrink-0 flex-grow-0 mb-1"
                />
              )}
              {region.garrison.gte(region.siege?.soldier as BigNumber) && (
                <img
                  src="/assets/images/trophyIconRegular.svg"
                  className="w-4 h-4 flex-shrink-0 flex-grow-0 mb-1"
                />
              )}
              <div
                className={`w-4 h-4 border border-gray-700 ${getFactionColor(
                  region.controlledBy as Faction
                )}`}
              ></div>
            </div>
          </div>
          <div
            className={`w-full h-2 mt-4 border border-gray-700 ${getFactionColor(
              region.controlledBy as Faction
            )}`}
          >
            <div
              className={`h-2 ${getFactionColor(
                region.siege?.attacker as Faction
              )}`}
              style={{
                width: `${
                  ((region.siege?.soldier as BigNumber).toNumber() /
                    region.garrison.toNumber() /
                    2) *
                  100
                }%`,
              }}
            ></div>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col px-4">
          <div className="flex flex-row items-center">
            <img
              src="/assets/images/shieldIconRegular.svg"
              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
            />
            <p>{region.garrison.toLocaleString()}</p>
          </div>
          <div className="flex flex-row items-center">
            <img
              src="/assets/images/shovelIconRegular.svg"
              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
            />
            <p>{region.totalWorker.toString()}</p>
          </div>
          {region.claimablePleb.gt(BigNumber.from("0")) && (
            <div className="flex flex-row items-center">
              <img
                src="/assets/images/coinIconRegular.svg"
                className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
              />
              <p>{region.claimablePleb.toString()}</p>
            </div>
          )}
        </div>
      )}
    </td>
  );
}
