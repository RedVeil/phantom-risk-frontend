import { getRegionBackgroundByFaction } from "src/utils/regionTileUtils";
import { Player } from "../interfaces/interfaces";

interface PlayerInfoProps {
  playerInfo: Player;
}

export default function PlayerInfo({
  playerInfo,
}: PlayerInfoProps): JSX.Element {
  return (
    <div className="ml-32 flex flex-row">
      <div className="flex flex-row items-center">
        <div className="h-12 w-48 rounded-lg  border border-gray-500 flex flex-row">
          <div className="w-9/12 h-12 text-center flex items-center">
            <div className="w-full flex flex-row flex-wrap items-center">
              <p className="mx-auto text-gray-700 text-lg">
                {playerInfo?.plebBalance?.toString()}
              </p>
              <p className="mx-auto text-gray-800 text-sm">PLB</p>
            </div>
          </div>
          <div
            className={`h-12 w-3/12  flex rounded-r-lg ${getRegionBackgroundByFaction(
              playerInfo.faction,
              true
            )}`}
          ></div>
        </div>
      </div>
    </div>
  );
}
