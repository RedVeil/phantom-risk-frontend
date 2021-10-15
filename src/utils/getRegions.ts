import { BigNumber, ethers } from "ethers";
import { Contracts } from "../context/contracts";
import {
  OverwhelmingArmy,
  Player,
  Region,
  RegionTier,
  Settings,
  Siege,
} from "../interfaces/interfaces";

function getOverwhelmingArmy(
  attacker: BigNumber,
  defender: BigNumber,
  overwhelming: number,
  rally: boolean
): OverwhelmingArmy {
  if (rally) {
    return OverwhelmingArmy.None;
  }
  if (defender.div(overwhelming) >= attacker) {
    return OverwhelmingArmy.Defender;
  }
  if (attacker.div(overwhelming) >= defender) {
    return OverwhelmingArmy.Attacker;
  }
  return OverwhelmingArmy.None;
}

export default async function getRegions(
  contracts: Contracts,
  settings: Settings,
  player?: Player
): Promise<[Region[], number[][]]> {
  const regionIds = await contracts.risk.getRegionIds();
  let tableLayout: any = Array(settings.layout.rows).fill(0);
  tableLayout = tableLayout.map(
    (x:number, i: number) => (tableLayout[i] = Array(settings.layout.columns).fill(0))
  );
  const provider = ethers.getDefaultProvider();
  const regions: Region[] = await Promise.all(
    regionIds.map(async (id: number) => {
      const res = await contracts.risk.getRegion(id);
      const block = await provider.getBlock("latest");
      const region: Region = {
        id: res.id_,
        column: res.column_,
        row: res.row_,
        neighbors: res.neighbors_,
        tier: res.tier_,
        tierSettings: settings.regionTiers[res.tier_] as RegionTier,
        garrison: res.garrison_,
        totalWorker: res.totalWorker_,
        controlledBy: res.controlledBy_,
        besieged: res.besieged_,
        cantGetAttackedTill: res.cantGetAttackedTill_.toNumber(),
        interactable: false,
        claimablePleb: BigNumber.from("0"),
        worker: BigNumber.from("0"),
      };

      tableLayout[res.row_][res.column_] = res.id_;

      if (res.besieged_) {
        const siege = await contracts.risk.getSiege(id);
        region["siege"] = {
          attacker: siege.attacker_,
          attackedAt: siege.attackedAt_.toNumber(),
          soldier: siege.soldier_,
          rally:
            siege.attackedAt_.toNumber() + settings.rallyTime < block.timestamp,
          overwhelm: getOverwhelmingArmy(
            siege.soldier_,
            region.garrison,
            settings.overwhelming,
            siege.attackedAt_.toNumber() + settings.rallyTime < block.timestamp
          ),
        } as Siege;
      }
      if (player?.address && region.controlledBy === player.faction) {
        const production = await contracts.risk.getProductionByLord(
          id,
          player.address
        );
        const claimablePleb = await contracts.risk.getClaimablePleb(
          id,
          player.address
        );
        region.worker = production[0];
        region.claimablePleb = claimablePleb;
      } else {
        region.worker = BigNumber.from(0);
        region.claimablePleb = BigNumber.from(0);
      }
      return region;
    })
  );
  return [regions, tableLayout];
}
