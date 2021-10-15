import { Faction, Player } from "../interfaces/interfaces";
import { getRegionBackgroundByFaction } from "../utils/regionTileUtils";

interface PlayerInfoProps {
  playerInfo: Player;
}

export default function PlayerInfo({
  playerInfo,
}: PlayerInfoProps): JSX.Element {
  return (
    <>
      <div className="w-1/2 flex flex-row items-center">
        <p>Pleb:</p> <p>{playerInfo?.plebBalance?.toString()}</p>
      </div>
      <div className="w-1/2 flex flex-row items-center">
        <p>Faction:</p>
        <p>{Faction[playerInfo?.faction]}</p>
        <div
          className={`w-4 h-4 border border-gray-700 ${getRegionBackgroundByFaction(
            playerInfo.faction,
            true
          )}`}
        ></div>
      </div>
    </>
  );
}
