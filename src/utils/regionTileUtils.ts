import { Faction } from "../interfaces/interfaces";

const INACTIVE = "100";
const ACTIVE = "200";
const COLORS = ["red", "blue", "green", "yellow"];

export function getRegionBackgroundByFaction(
  faction: Faction,
  selected: boolean
): string {
  switch (faction) {
    case Faction.Red:
      return selected ? "bg-red-600" : "bg-red-500";
    case Faction.Blue:
      return selected ? "bg-blue-500" : "bg-blue-400";
    case Faction.Green:
      return selected ? "bg-green-500" : "bg-green-400";
    case Faction.Yellow:
      return selected ? "bg-yellow-400" : "bg-yellow-300";
  }
}

export function getRegionHoverColorByFaction(
  faction: Faction,
  selected: boolean
): string {
  switch (faction) {
    case Faction.Red:
      return selected ? "hover:bg-red-500" : "hover:bg-red-400";
    case Faction.Blue:
      return selected ? "hover:bg-blue-400" : "hover:bg-blue-300";
    case Faction.Green:
      return selected ? "hover:bg-green-400" : "hover:bg-green-300";
    case Faction.Yellow:
      return selected ? "hover:bg-yellow-300" : "hover:bg-yellow-200";
  }
}

export function getFactionColor(faction: Faction): string {
  switch (faction) {
    case Faction.Red:
      return "bg-red-600";
    case Faction.Blue:
      return "bg-blue-400";
    case Faction.Green:
      return "bg-green-500";
    case Faction.Yellow:
      return "bg-yellow-400";
  }
}

export function getBorderForRegionTier(tier: number): string {
  const borders = [
    "border-none",
    "border-dotted",
    "border-dashed",
    "border-solid",
    "border-4 border-double",
  ];
  return borders[tier] as string;
}
