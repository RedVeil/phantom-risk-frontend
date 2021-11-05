import { parseEther } from "@ethersproject/units";
import { BigNumber } from "ethers";
import {
  Faction,
  OverwhelmingArmy,
  Player,
  Region,
  RegionTier,
  Settings,
} from "../interfaces/interfaces";

export const regionTiers: RegionTier[] = [
  {
    workerLimit: BigNumber.from("10000"),
    requiredGarrison: BigNumber.from("0"),
    plebPerSec: BigNumber.from("1000"),
  },
  {
    workerLimit: BigNumber.from("20000"),
    requiredGarrison: BigNumber.from("1500"),
    plebPerSec: BigNumber.from("5000"),
  },
  {
    workerLimit: BigNumber.from("50000"),
    requiredGarrison: BigNumber.from("5000"),
    plebPerSec: BigNumber.from("10000"),
  },
  {
    workerLimit: BigNumber.from("100000"),
    requiredGarrison: BigNumber.from("10000"),
    plebPerSec: BigNumber.from("1000000"),
  },
  {
    workerLimit: BigNumber.from("10000"),
    requiredGarrison: BigNumber.from("50000"),
    plebPerSec: BigNumber.from("100000000"),
  },
];

const dummySettings: Settings = {
  ticketPrice: parseEther("10"),
  rallyTime: 1000,
  siegeTime: 2000,
  siegeCooldown: 1000,
  overwhelming: 3,
  overwhelmingPenalty: 2,
  plebForSoldier: 2,
  plebForWorker:1,
  regionTiers: regionTiers as RegionTier[],
  layout: {
    rows: 2,
    columns: 3,
  },
};

const dummyPlayer: Player = {
  address: "0x",
  plebBalance: BigNumber.from("1000000"),
  plebAllowance: BigNumber.from("10000000000"),
  faction: Faction.Red,
};

const dummyRegionLayout: number[][] = [
  [0, 1, 4],
  [2, 3],
];

const dummyRegions: Region[] = [
  {
    id: 0,
    column: 0,
    row: 0,
    neighbors: [0, 1, 2, 3],
    tier: 0,
    tierSettings: regionTiers[0] as RegionTier,
    garrison: regionTiers[0]?.requiredGarrison as BigNumber,
    totalWorker: BigNumber.from("1000"),
    worker: BigNumber.from("1000"),
    claimablePleb: BigNumber.from("500"),
    controlledBy: Faction.Red,
    besieged: false,
    cantGetAttackedTill: 1633700421,
    interactable: true,
  },
  {
    id: 1,
    column: 1,
    row: 0,
    neighbors: [0, 2, 3],
    tier: 1,
    tierSettings: regionTiers[1] as RegionTier,
    garrison: regionTiers[1]?.requiredGarrison as BigNumber,
    totalWorker: BigNumber.from("1000"),
    worker: BigNumber.from("0"),
    claimablePleb: BigNumber.from("0"),
    controlledBy: Faction.Blue,
    besieged: true,
    cantGetAttackedTill: 1633700421,
    interactable: true,
    siege: {
      attacker: Faction.Red,
      soldier: BigNumber.from("800"),
      attackedAt: 1633700521,
      rally: true,
      overwhelm: OverwhelmingArmy.None,
    },
  },
  {
    id: 2,
    column: 0,
    row: 1,
    neighbors: [0, 1, 3],
    tier: 2,
    tierSettings: regionTiers[2] as RegionTier,
    garrison: regionTiers[2]?.requiredGarrison as BigNumber,
    totalWorker: BigNumber.from("0"),
    worker: BigNumber.from("0"),
    claimablePleb: BigNumber.from("0"),
    controlledBy: Faction.Green,
    besieged: false,
    cantGetAttackedTill: 1633700421,
    interactable: true,
  },
  {
    id: 3,
    column: 1,
    row: 1,
    neighbors: [0, 1, 2],
    tier: 3,
    tierSettings: regionTiers[3] as RegionTier,
    garrison: regionTiers[3]?.requiredGarrison as BigNumber,
    totalWorker: BigNumber.from("0"),
    worker: BigNumber.from("0"),
    claimablePleb: BigNumber.from("0"),
    controlledBy: Faction.Yellow,
    besieged: false,
    cantGetAttackedTill: 1633700421,
    interactable: false,
  },
  {
    id: 4,
    column: 2,
    row: 0,
    neighbors: [1, 3],
    tier: 4,
    tierSettings: regionTiers[4] as RegionTier,
    garrison: regionTiers[4]?.requiredGarrison as BigNumber,
    totalWorker: BigNumber.from("0"),
    worker: BigNumber.from("0"),
    claimablePleb: BigNumber.from("0"),
    controlledBy: Faction.Yellow,
    besieged: false,
    cantGetAttackedTill: 1633700521,
    interactable: false,
  },
];
export default [dummyRegions, dummyRegionLayout, dummyPlayer, dummySettings];
