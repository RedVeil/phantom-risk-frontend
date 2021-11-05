import { BigNumber } from "ethers";
import React from "react";
import ActionButton from "./ActionButton";

interface DeployPlebInterfaceProps {
  label: string;
  inputPlaceholder: string;
  plebBalance: BigNumber;
  disabled: boolean;
  value: BigNumber;
  updateValue: (value: string) => void;
  onClick: () => void;
}

export default function DeployPlebInterface({
  label,
  inputPlaceholder,
  plebBalance,
  disabled,
  value,
  updateValue,
  onClick,
}: DeployPlebInterfaceProps): JSX.Element {
  return (
    <div>
      <div
        className={`w-full px-2 py-2  rounded-md flex flex-row my-2 border ${
          disabled ? "border-red-600" : "border-gray-600"
        }`}
      >
        <input
          className="w-10/12 bg-gray-800"
          placeholder={inputPlaceholder}
          value={value.toString()}
          onChange={(e) => updateValue(e.target.value)}
        ></input>
        <p
          className="cursor-pointer"
          onClick={() => updateValue(plebBalance.toString())}
        >
          MAX
        </p>
      </div>
      <ActionButton label={label} disabled={disabled} onClick={onClick} />
    </div>
  );
}
