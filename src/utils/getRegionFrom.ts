import { Faction, Region } from "../interfaces/interfaces";

export default function getRegionFrom(
  activeRegion: Region,
  regions: Region[] | undefined,
  playerFaction: Faction | undefined
): number | null {
  if (regions === undefined || playerFaction === undefined) {
    return null;
  }
  const neighbors = regions.filter((region) =>
    activeRegion.neighbors.includes(region.id)
  );
  const possibleNeighbors = neighbors.filter(
    (region) => !region.besieged && region.controlledBy === playerFaction
  );
  return possibleNeighbors.length > 0
    ? (possibleNeighbors[0] as Region).id
    : null;
}
