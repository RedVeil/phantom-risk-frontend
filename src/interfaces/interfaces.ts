import { BigNumber } from "ethers";

export interface Player{
  address:string;
  plebBalance:BigNumber;
  plebAllowance:BigNumber;
  faction:Faction
}

export enum OverwhelmingArmy {
  None,
  Attacker,
  Defender
}

export enum Faction {
  Red,
  Blue,
  Green,
  Yellow,
}

export interface Region {
  id: number;
  column: number;
  row: number;
  neighbors: number[];
  tier: number;
  tierSettings:RegionTier;
  garrison: BigNumber;
  totalWorker: BigNumber;
  controlledBy: Faction;
  besieged: boolean;
  cantGetAttackedTill: number;
  interactable: boolean;
  claimablePleb: BigNumber;
  worker: BigNumber;
  siege?: Siege;
}

export interface Production {
  lord: string;
  worker: BigNumber;
  claimablePleb: BigNumber;
  lastClaimedAt: BigNumber;
}

export interface Army {
  lord: string;
  soldier: BigNumber;
  movedAt: BigNumber;
}

export interface Siege {
  attacker: Faction;
  attackedAt: number;
  soldier: BigNumber;
  rally:boolean;
  overwhelm:OverwhelmingArmy;
}

export interface RegionTier {
  workerLimit: BigNumber;
  requiredGarrison: BigNumber;
  plebPerSec: BigNumber;
}

export interface Layout {
  rows:number;
  columns:number;
}

export interface Settings {
  ticketPrice: BigNumber;
  rallyTime: number;
  siegeTime: number;
  siegeCooldown: number;
  overwhelming: number;
  overwhelmingPenalty: number;
  plebForSoldier: number;
  plebForWorker:number;
  regionTiers:RegionTier[]
  layout:Layout;
}

export interface Actions {
  claim: Function;
  deployWorker: Function;
  deployGarrison: Function;
  attack: Function;
}

export interface ActionValue {
  value:BigNumber;
  update:(value:string) => void;
}

export interface ActionValues {
  worker:ActionValue,
  garrison:ActionValue,
  attack:ActionValue
}

export interface ActionInterface {
  title:string,
  inputPlaceholder:string,
  disabled:boolean,
  actionValue:ActionValue,
  action:Function;
  content:string;
  toggleResolve?:boolean
}