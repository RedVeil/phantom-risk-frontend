import { ReactElement, useState } from "react";
import { ChevronDown, ChevronUp } from "./Chevron";

interface SpoilerProbs {
  title: ReactElement;
  children: ReactElement;
  visibleOnLoad?: boolean;
}

export default function Spoiler({
  title,
  children,
  visibleOnLoad = false,
}: SpoilerProbs): JSX.Element {
  const [visible, setVisible] = useState<boolean>(visibleOnLoad);
  return (
    <div>
      <div
        className="flex flex-row justify-between pb-0.5 mb-1 border-b border-gray-600"
        onClick={(e) => setVisible(!visible)}
      >
        {title}
        {visible ? <ChevronUp /> : <ChevronDown />}
      </div>
      {visible && children}
    </div>
  );
}
