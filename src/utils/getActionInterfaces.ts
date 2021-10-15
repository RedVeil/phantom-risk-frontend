import { BigNumber } from "@ethersproject/bignumber";
import {
  ActionInterface,
  Actions,
  ActionValues,
  Faction,
  OverwhelmingArmy,
  Player,
  Region,
  Settings,
} from "../interfaces/interfaces";

const title = {
  worker: "Deploy Worker",
  garrison: "Deploy Garrison",
  defender: "Reinforce Defender",
  attacker: "Attack Region",
  reinforcement: "Reinforce Attacker",
};

export default function getActionInterfaces(
  region: Region,
  player: Player,
  settings: Settings,
  blockTime: number,
  actionValues: ActionValues,
  actions: Actions,
  regionFrom: number | null
): ActionInterface[] {
  if (regionFrom === null) {
    return [];
  }
  if (region.controlledBy === player.faction) {
    if (region.besieged) {
      if (region.siege?.rally) {
        return [
          {
            title: title["garrison"],
            inputPlaceholder: "Soldier",
            disabled:
              actionValues.garrison.value.eq(BigNumber.from("0")) ||
              actionValues.garrison.value.gt(player.plebBalance),
            actionValue: actionValues.garrison,
            content: `Garrison will increase to ${region.garrison
              .add(actionValues.garrison.value.div(settings.plebForSoldier))
              .toString()}`,
            action: () =>
              actions.deployGarrison(
                region.id,
                regionFrom,
                actionValues.garrison.value.div(settings.plebForSoldier),
                true
              ),
          },
        ];
      } else {
        if (region.siege?.overwhelm === OverwhelmingArmy.Attacker) {
          return [
            {
              title: title["garrison"],
              inputPlaceholder: "Soldier",
              disabled:
                actionValues.garrison.value.eq(BigNumber.from("0")) ||
                actionValues.garrison.value.gt(player.plebBalance),
              actionValue: actionValues.garrison,
              action: () =>
                actions.deployGarrison(
                  region.id,
                  regionFrom,
                  actionValues.garrison.value.div(settings.plebForSoldier),
                  false
                ),
              content: `Garrison will increase to ${region.garrison
                .add(actionValues.garrison.value.div(settings.plebForSoldier))
                .toString()} against ${region.siege.soldier.toString()} attacker.`,
            },
          ];
        }
        if (region.siege?.overwhelm === OverwhelmingArmy.Defender) {
          return [
            {
              title: title["worker"],
              inputPlaceholder: "Worker",
              disabled:
                actionValues.worker.value.eq(BigNumber.from("0")) ||
                actionValues.worker.value.gt(player.plebBalance),
              actionValue: actionValues.worker,
              action: () =>
                actions.deployWorker(region.id, actionValues.worker.value),
              content: `You will have ${region.worker
                .add(actionValues.worker.value)
                .toString()} earning  ${region.tierSettings.plebPerSec
                .div(region.totalWorker)
                .mul(region.worker.add(actionValues.worker.value))
                .toString()} Pleb per second.`,
            },
            {
              title: title["garrison"],
              inputPlaceholder: "Soldier",
              disabled:
                actionValues.garrison.value.eq(BigNumber.from("0")) ||
                actionValues.garrison.value.gt(player.plebBalance),
              actionValue: actionValues.garrison,
              action: () =>
                actions.deployGarrison(
                  region.id,
                  regionFrom,
                  actionValues.garrison.value.div(settings.plebForSoldier),
                  true
                ),
              content: `Garrison will increase to ${region.garrison
                .add(actionValues.garrison.value.div(settings.plebForSoldier))
                .toString()}`,
            },
          ];
        }
        if (
          (region.siege?.attackedAt as number) + settings.siegeTime <
            blockTime &&
          region.garrison >= (region.siege?.soldier as BigNumber)
        ) {
          return [
            {
              title: title["worker"],
              inputPlaceholder: "Worker",
              disabled:
                actionValues.worker.value.eq(BigNumber.from("0")) ||
                actionValues.worker.value.gt(player.plebBalance),
              actionValue: actionValues.worker,
              action: () =>
                actions.deployWorker(region.id, actionValues.worker.value),
              content: `You will have ${region.worker
                .add(actionValues.worker.value)
                .toString()} earning  ${region.tierSettings.plebPerSec
                .div(region.totalWorker)
                .mul(region.worker.add(actionValues.worker.value))
                .toString()} Pleb per second.`,
            },
            {
              title: title["garrison"],
              inputPlaceholder: "Soldier",
              disabled:
                actionValues.garrison.value.eq(BigNumber.from("0")) ||
                actionValues.garrison.value.gt(player.plebBalance),
              actionValue: actionValues.garrison,
              action: () =>
                actions.deployGarrison(
                  region.id,
                  regionFrom,
                  actionValues.garrison.value.div(settings.plebForSoldier),
                  true
                ),
              content: `Garrison will increase to ${region.garrison
                .add(actionValues.garrison.value.div(settings.plebForSoldier))
                .toString()}`,
            },
          ];
        }
        return [
          {
            title: title["garrison"],
            inputPlaceholder: "Soldier",
            disabled:
              actionValues.garrison.value.eq(BigNumber.from("0")) ||
              actionValues.garrison.value.gt(player.plebBalance),
            actionValue: actionValues.garrison,
            action: () =>
              actions.deployGarrison(
                region.id,
                regionFrom,
                actionValues.garrison.value.div(settings.plebForSoldier),
                true
              ),
            content: `Garrison will increase to ${region.garrison
              .add(actionValues.garrison.value.div(settings.plebForSoldier))
              .toString()} against ${region.siege?.soldier.toString()} attacker.`,
          },
        ];
      }
    } else {
      return [
        {
          title: title["worker"],
          inputPlaceholder: "Worker",
          disabled:
            actionValues.worker.value.eq(BigNumber.from("0")) ||
            actionValues.worker.value.gt(player.plebBalance),
          actionValue: actionValues.worker,
          action: () =>
            actions.deployWorker(region.id, actionValues.worker.value),
          content: `You will have ${region.worker
                .add(actionValues.worker.value)
                .toString()} earning  ${region.tierSettings.plebPerSec
                .div(region.totalWorker)
                .mul(region.worker.add(actionValues.worker.value))
                .toString()} Pleb per second.`,
        },
        {
          title: title["garrison"],
          inputPlaceholder: "Soldier",
          disabled:
            actionValues.garrison.value.eq(BigNumber.from("0")) ||
            actionValues.garrison.value.gt(player.plebBalance),
          actionValue: actionValues.garrison,
          action: () =>
            actions.deployGarrison(
              region.id,
              regionFrom,
              actionValues.garrison.value.div(settings.plebForSoldier),
              true
            ),
          content: `Garrison will increase to ${region.garrison
            .add(actionValues.garrison.value.div(settings.plebForSoldier))
            .toString()}`,
        },
      ];
    }
  } else {
    if (region.besieged) {
      if (region.siege?.rally) {
        if (region.siege?.attacker === player.faction) {
          return [
            {
              title: title["attacker"],
              inputPlaceholder: "Soldier",
              disabled:
                actionValues.attack.value.eq(BigNumber.from("0")) ||
                actionValues.attack.value.gt(player.plebBalance),
              actionValue: actionValues.attack,
              action: () =>
                actions.attack(
                  region.id,
                  regionFrom,
                  actionValues.attack.value.div(settings.plebForSoldier),
                  true
                ),
              content: `Your forces will increase to ${region.siege.soldier
                .add(actionValues.attack.value.div(settings.plebForSoldier))
                .toString()} against ${region.garrison.toString()} defender.`,
            },
          ];
        } else {
          console.log("def");
          return [
            {
              title: title["defender"],
              inputPlaceholder: "Soldier",
              disabled:
                actionValues.garrison.value.eq(BigNumber.from("0")) ||
                actionValues.garrison.value.gt(player.plebBalance),
              actionValue: actionValues.garrison,
              action: () =>
                actions.deployGarrison(
                  region.id,
                  regionFrom,
                  actionValues.garrison.value.div(settings.plebForSoldier),
                  true
                ),
              content: `The defending Garrison of ${
                Faction[region.controlledBy]
              } will increase to ${region.garrison
                .add(actionValues.garrison.value.div(settings.plebForSoldier))
                .toString()} against ${region.siege.soldier} attacker.`,
            },
            {
              title: title["reinforcement"],
              inputPlaceholder: "Soldier",
              disabled:
                actionValues.attack.value.eq(BigNumber.from("0")) ||
                actionValues.attack.value.gt(player.plebBalance),
              actionValue: actionValues.attack,
              action: () =>
                actions.attack(
                  region.id,
                  regionFrom,
                  actionValues.attack.value.div(settings.plebForSoldier),
                  true
                ),
              content: `The attacking forces of ${
                Faction[region.siege.attacker]
              } will increase to ${region.siege.soldier
                .add(actionValues.attack.value.div(settings.plebForSoldier))
                .toString()} against ${region.garrison.toString()} defender.`,
            },
          ];
        }
      } else {
        if (region.siege?.attacker === player.faction) {
          if (region.siege?.overwhelm === OverwhelmingArmy.Attacker) {
            return [
              {
                title: title["worker"],
                inputPlaceholder: "Worker",
                disabled:
                  actionValues.worker.value.eq(BigNumber.from("0")) ||
                  actionValues.worker.value.gt(player.plebBalance),
                actionValue: actionValues.worker,
                action: () =>
                  actions.deployWorker(region.id, actionValues.worker.value),
                content: `You will have ${region.worker
                .add(actionValues.worker.value)
                .toString()} earning  ${region.tierSettings.plebPerSec
                .div(region.totalWorker)
                .mul(region.worker.add(actionValues.worker.value))
                .toString()} Pleb per second.`,
              },
              {
                title: title["garrison"],
                inputPlaceholder: "Soldier",
                disabled:
                  actionValues.garrison.value.eq(BigNumber.from("0")) ||
                  actionValues.garrison.value.gt(player.plebBalance),
                actionValue: actionValues.garrison,
                action: () =>
                  actions.deployGarrison(
                    region.id,
                    regionFrom,
                    actionValues.garrison.value.div(settings.plebForSoldier),
                    true
                  ),
                content: `Garrison will increase to ${region.garrison
                  .add(actionValues.garrison.value.div(settings.plebForSoldier))
                  .toString()}`,
              },
            ];
          }
          if (region.siege?.overwhelm === OverwhelmingArmy.Defender) {
            return [
              {
                title: title["attacker"],
                inputPlaceholder: "Soldier",
                disabled:
                  actionValues.attack.value.eq(BigNumber.from("0")) ||
                  actionValues.attack.value.gt(player.plebBalance),
                actionValue: actionValues.attack,
                action: () =>
                  actions.attack(
                    region.id,
                    regionFrom,
                    actionValues.attack.value.div(settings.plebForSoldier),
                    false
                  ),
                content: `Your foces will oncrease to ${region.siege.soldier
                  .add(actionValues.attack.value.div(settings.plebForSoldier))
                  .toString()} against ${region.garrison.toString()}`,
              },
            ];
          }
          if (
            (region.siege?.attackedAt as number) + settings.siegeTime <
              blockTime &&
            region.siege.soldier >= (region.garrison as BigNumber)
          ) {
            return [
              {
                title: title["worker"],
                inputPlaceholder: "Worker",
                disabled:
                  actionValues.worker.value.eq(BigNumber.from("0")) ||
                  actionValues.worker.value.gt(player.plebBalance),
                actionValue: actionValues.worker,
                action: () =>
                  actions.deployWorker(region.id, actionValues.worker.value),
                content: `You will have ${region.worker
                .add(actionValues.worker.value)
                .toString()} earning  ${region.tierSettings.plebPerSec
                .div(region.totalWorker)
                .mul(region.worker.add(actionValues.worker.value))
                .toString()} Pleb per second.`,
              },
              {
                title: title["garrison"],
                inputPlaceholder: "Soldier",
                disabled:
                  actionValues.garrison.value.eq(BigNumber.from("0")) ||
                  actionValues.garrison.value.gt(player.plebBalance),
                actionValue: actionValues.garrison,
                action: () =>
                  actions.deployGarrison(
                    region.id,
                    regionFrom,
                    actionValues.garrison.value.div(settings.plebForSoldier),
                    true
                  ),
                content: `Garrison will increase to ${region.garrison
                  .add(actionValues.garrison.value.div(settings.plebForSoldier))
                  .toString()}`,
              },
            ];
          }
          return [
            {
              title: title["attacker"],
              inputPlaceholder: "Soldier",
              disabled:
                actionValues.attack.value.eq(BigNumber.from("0")) ||
                actionValues.attack.value.gt(player.plebBalance),
              actionValue: actionValues.attack,
              action: () =>
                actions.attack(
                  region.id,
                  regionFrom,
                  actionValues.attack.value.div(settings.plebForSoldier),
                  true
                ),
              content: `Your forces will increase to ${region.siege.soldier
                .add(actionValues.attack.value.div(settings.plebForSoldier))
                .toString()} against ${region.garrison.toString()} defender.`,
            },
          ];
        } else {
          if (
            (region.siege?.attackedAt as number) + settings.siegeTime <
            blockTime
          ) {
            return [
              {
                title: title["defender"],
                inputPlaceholder: "Soldier",
                disabled:
                  actionValues.garrison.value.eq(BigNumber.from("0")) ||
                  actionValues.garrison.value.gt(player.plebBalance),
                actionValue: actionValues.garrison,
                action: () =>
                  actions.deployGarrison(
                    region.id,
                    regionFrom,
                    actionValues.garrison.value.div(settings.plebForSoldier),
                    true
                  ),
                content: `The defending Garrison of ${
                  Faction[region.controlledBy]
                } will increase to ${region.garrison
                  .add(actionValues.garrison.value.div(settings.plebForSoldier))
                  .toString()}.`,
              },
            ];
          }
          return [
            {
              title: title["defender"],
              inputPlaceholder: "Soldier",
              disabled:
                actionValues.garrison.value.eq(BigNumber.from("0")) ||
                actionValues.garrison.value.gt(player.plebBalance),
              actionValue: actionValues.garrison,
              action: () =>
                actions.deployGarrison(
                  region.id,
                  regionFrom,
                  actionValues.garrison.value.div(settings.plebForSoldier),
                  true
                ),
              content: `The defending Garrison of ${
                Faction[region.controlledBy]
              } will increase to ${region.garrison
                .add(actionValues.garrison.value.div(settings.plebForSoldier))
                .toString()}.`,
              toggleResolve: true,
            },
            {
              title: title["reinforcement"],
              inputPlaceholder: "Soldier",
              disabled:
                actionValues.attack.value.eq(BigNumber.from("0")) ||
                actionValues.attack.value.gt(player.plebBalance),
              actionValue: actionValues.attack,
              action: () =>
                actions.attack(
                  region.id,
                  regionFrom,
                  actionValues.attack.value.div(settings.plebForSoldier),
                  true
                ),
              content: `The attacking forces of ${
                Faction[region?.siege?.attacker as Faction]
              } will increase to ${region?.siege?.soldier
                .add(actionValues.attack.value.div(settings.plebForSoldier))
                .toString()} against ${region.garrison.toString()} defender.`,
              toggleResolve: true,
            },
          ];
        }
      }
    } else {
      if (region.cantGetAttackedTill < blockTime) {
        return [
          {
            title: title["defender"],
            inputPlaceholder: "Soldier",
            disabled:
              actionValues.garrison.value.eq(BigNumber.from("0")) ||
              actionValues.garrison.value.gt(player.plebBalance),
            actionValue: actionValues.garrison,
            action: () =>
              actions.deployGarrison(
                region.id,
                regionFrom,
                actionValues.garrison.value.div(settings.plebForSoldier),
                true
              ),
            content: `The defending Garrison of ${
              Faction[region.controlledBy]
            } will increase to ${region.garrison
              .add(actionValues.garrison.value.div(settings.plebForSoldier))
              .toString()}.`,
          },
          {
            title: title["attacker"],
            inputPlaceholder: "Soldier",
            disabled:
              actionValues.attack.value.eq(BigNumber.from("0")) ||
              actionValues.attack.value.gt(player.plebBalance),
            actionValue: actionValues.attack,
            action: () =>
              actions.attack(
                region.id,
                regionFrom,
                actionValues.attack.value.div(settings.plebForSoldier),
                true
              ),
            content: `You will attack with ${actionValues.attack.value
              .div(settings.plebForSoldier)
              .toString()} against ${region.garrison.toString()}`,
          },
        ];
      }
      return [
        {
          title: title["garrison"],
          inputPlaceholder: "Soldier",
          disabled:
            actionValues.garrison.value.eq(BigNumber.from("0")) ||
            actionValues.garrison.value.gt(player.plebBalance),
          actionValue: actionValues.garrison,
          action: () =>
            actions.deployGarrison(
              region.id,
              regionFrom,
              actionValues.garrison.value.div(settings.plebForSoldier),
              true
            ),
          content: `The Garrison of ${
            Faction[region.controlledBy]
          } will increase to ${region.garrison
            .add(actionValues.garrison.value.div(settings.plebForSoldier))
            .toString()}.`,
        },
      ];
    }
  }
}
