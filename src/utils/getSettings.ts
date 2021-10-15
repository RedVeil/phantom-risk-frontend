import { Contracts } from "../context/contracts";
import { Settings } from "../interfaces/interfaces";

export default async function getSettings(contracts: Contracts): Promise<Settings> {
  const layout = await contracts.risk.layout();
  const regionTiers = await contracts?.risk?.getRegionTiers();
  const settings = await contracts?.risk?.settings();

  return {
    ticketPrice: settings.ticketPrice,
    rallyTime: settings.rallyTime.toNumber(),
    siegeTime: settings.siegeTime.toNumber(),
    siegeCooldown: settings.siegeCooldown.toNumber(),
    overwhelming: settings.overwhelming.toNumber(),
    overwhelmingPenalty: settings.overwhelmingPenalty.toNumber(),
    plebForSoldier: settings.plebForSoldier.toNumber(),
    regionTiers: regionTiers,
    layout: layout,
  };
}
