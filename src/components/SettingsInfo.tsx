import ReactTooltip from "react-tooltip";
import { Settings } from "src/interfaces/interfaces";

interface SettingsInfoProps {
  settings: Settings;
}

export default function SettingsInfo({
  settings,
}: SettingsInfoProps): JSX.Element {
  return (
    <>
      <a data-tip data-for="Settings">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="cog"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          stroke="currentColor"
          className="text-gray-500 ml-1 w-6 h-6 cursor-pointer hover:text-gray-300"
        >
          <path
            fill="currentColor"
            d="M452.515 237l31.843-18.382c9.426-5.441 13.996-16.542 11.177-27.054-11.404-42.531-33.842-80.547-64.058-110.797-7.68-7.688-19.575-9.246-28.985-3.811l-31.785 18.358a196.276 196.276 0 0 0-32.899-19.02V39.541a24.016 24.016 0 0 0-17.842-23.206c-41.761-11.107-86.117-11.121-127.93-.001-10.519 2.798-17.844 12.321-17.844 23.206v36.753a196.276 196.276 0 0 0-32.899 19.02l-31.785-18.358c-9.41-5.435-21.305-3.877-28.985 3.811-30.216 30.25-52.654 68.265-64.058 110.797-2.819 10.512 1.751 21.613 11.177 27.054L59.485 237a197.715 197.715 0 0 0 0 37.999l-31.843 18.382c-9.426 5.441-13.996 16.542-11.177 27.054 11.404 42.531 33.842 80.547 64.058 110.797 7.68 7.688 19.575 9.246 28.985 3.811l31.785-18.358a196.202 196.202 0 0 0 32.899 19.019v36.753a24.016 24.016 0 0 0 17.842 23.206c41.761 11.107 86.117 11.122 127.93.001 10.519-2.798 17.844-12.321 17.844-23.206v-36.753a196.34 196.34 0 0 0 32.899-19.019l31.785 18.358c9.41 5.435 21.305 3.877 28.985-3.811 30.216-30.25 52.654-68.266 64.058-110.797 2.819-10.512-1.751-21.613-11.177-27.054L452.515 275c1.22-12.65 1.22-25.35 0-38zm-52.679 63.019l43.819 25.289a200.138 200.138 0 0 1-33.849 58.528l-43.829-25.309c-31.984 27.397-36.659 30.077-76.168 44.029v50.599a200.917 200.917 0 0 1-67.618 0v-50.599c-39.504-13.95-44.196-16.642-76.168-44.029l-43.829 25.309a200.15 200.15 0 0 1-33.849-58.528l43.819-25.289c-7.63-41.299-7.634-46.719 0-88.038l-43.819-25.289c7.85-21.229 19.31-41.049 33.849-58.529l43.829 25.309c31.984-27.397 36.66-30.078 76.168-44.029V58.845a200.917 200.917 0 0 1 67.618 0v50.599c39.504 13.95 44.196 16.642 76.168 44.029l43.829-25.309a200.143 200.143 0 0 1 33.849 58.529l-43.819 25.289c7.631 41.3 7.634 46.718 0 88.037zM256 160c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 144c-26.468 0-48-21.532-48-48 0-26.467 21.532-48 48-48s48 21.533 48 48c0 26.468-21.532 48-48 48z"
          ></path>
        </svg>
      </a>
      <ReactTooltip
        id="Settings"
        place="bottom"
        type="light"
        effect="solid"
        aria-haspopup="true"
      >
        <li className="list-none">
          <ul>
            Rally Duration: {new Date(settings.rallyTime * 1000).getUTCHours()}H
          </ul>
          <ul>
            Siege Duration: {new Date(settings.siegeTime * 1000).getUTCHours()}H
          </ul>
          <ul>
            Siege Protection:{" "}
            {new Date(settings.siegeTime * 1000).getUTCHours()}H
          </ul>
          <ul>Overwhelming: {100 + settings.overwhelming}%</ul>
          <ul>Overwhelming Penalty: {settings.overwhelmingPenalty}</ul>
          <ul>Cost of Soldier: {settings.plebForSoldier} PLB</ul>
          <ul>Cost of Worker: {settings.plebForWorker} PLB</ul>
          <ul>REGION_TIERS</ul>
          {settings.regionTiers.map((tier, i) => (
            <ul key={`regionTier-${i}`}>
              <p>TIER {i}</p>
              <p>WorkerLimit: {tier.workerLimit.toString()}</p>
              <p>Required Garrison: {tier.requiredGarrison.toString()}</p>
              <p>Pleb/s: {tier.plebPerSec.toString()}</p>
            </ul>
          ))}
        </li>
      </ReactTooltip>
    </>
  );
}
