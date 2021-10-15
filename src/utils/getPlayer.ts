import { Contracts } from "../context/contracts";
import { Faction, Player } from "../interfaces/interfaces";

export default async function getPlayer(
  contracts: Contracts,
  account: string
): Promise<[Player, boolean]> {
  const player = await contracts.risk.player(account);
  const allowance = await contracts.pleb.allowance(
    account,
    contracts.risk.address
  );
  const balance = await contracts.pleb.balanceOf(account);
  return [
    {
      address: account,
      plebBalance: balance,
      plebAllowance: allowance,
      faction: player.faction as Faction,
    },
    player.joined,
  ];
}
