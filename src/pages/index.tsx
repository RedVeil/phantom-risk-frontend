import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import FeatureCard from "src/components/landing/FeatureCard";
import CustomTooltip from "src/components/Tooltip";
import { Faction } from "src/interfaces/interfaces";
import {
  getBorderForRegionTier,
  getFactionColor,
} from "src/utils/regionTileUtils";

export default function Index(): JSX.Element {
  return (
    <div className="w-full min-h-screen bg-gray-200">
      <div className="w-2/3 mx-auto">
        <div className="relative overflow-hidden">
          <div className="relative pt-6 pb-16 sm:pb-24">
            <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">
                    Conquer the World for your Faction
                  </span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  PhantomRisk is a massive multiplayer strategy game running on
                  the blockchain.
                  <br /> Join one of four factions, build an economy and fight
                  alongside your allies until you are the only faction left
                  standing.
                </p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                  <div className="rounded-md shadow">
                    <a
                      href="#" //game
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 opacity-70"
                    >
                      Coming soon
                    </a>
                  </div>
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                    <a
                      href="https://discord.gg/hwWKNyH9uj"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                    >
                      Join Discord
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center">
          <FeatureCard
            icon={
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="shovel"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="text-white w-6 h-6 m-1 flex-shrink-0 flex-grow-0"
                fill="currentColor"
                stroke="currentColor"
              >
                <path
                  fill="currentColor"
                  d="M502.71 89.55L422.45 9.29C416.26 3.1 408.14 0 400.02 0s-16.24 3.1-22.43 9.29l-31.56 31.56c-16.77 16.77-25.91 39.25-25.91 62.49 0 20.49 6.93 35.24 11.39 43.23L207.22 270.86l-52.66-52.66c-6.24-6.25-14.43-9.37-22.61-9.37s-16.37 3.12-22.61 9.37l-69.62 69.62C-11.22 338.76-6.4 472.29 16.66 495.35 26.71 505.41 57.81 512 93.89 512c46.62 0 101.57-11 130.29-39.71l69.62-69.62c12.49-12.49 12.49-32.74 0-45.23l-52.66-52.66 124.32-124.32c17.83 9.95 34.2 11.45 43.26 11.45 24.7 0 48.16-11.67 65.7-29.2l28.29-28.3c12.39-12.39 12.39-32.47 0-44.86zM190.26 438.37c-15.35 15.35-54.08 25.66-96.37 25.66-19.48 0-33.9-2.27-41.9-4.31-7.87-29.31-5.31-111.05 21.63-137.99l58.31-58.32 116.63 116.63-58.3 58.33zm250.23-309.59c-9.61 9.61-21.17 15.13-32.76 15.13-35 0-53.14-43.78-27.78-69.15l20.07-20.07 57.28 57.28-16.81 16.81z"
                ></path>
              </svg>
            }
            title={"Farm"}
            description={`Create an economy to support your faction. Your worker farm PLB. Burn PLB for more worker and soldier for your wars or sell it to other players.`}
          />
          <FeatureCard
            icon={
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="swords"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="text-white w-6 h-6 m-1 flex-shrink-0 flex-grow-0"
                fill="currentColor"
                stroke="currentColor"
              >
                <path
                  fill="currentColor"
                  d="M507.31 462.06L448 402.75l31.64-59.03c3.33-6.22 2.2-13.88-2.79-18.87l-17.54-17.53c-6.25-6.25-16.38-6.25-22.63 0L420 324 112 16 18.27.16C8.27-1.27-1.42 7.17.17 18.26l15.84 93.73 308 308-16.69 16.69c-6.25 6.25-6.25 16.38 0 22.62l17.53 17.54a16 16 0 0 0 18.87 2.79L402.75 448l59.31 59.31c6.25 6.25 16.38 6.25 22.63 0l22.62-22.62c6.25-6.25 6.25-16.38 0-22.63zm-149.36-76.01L60.78 88.89l-5.72-33.83 33.84 5.72 297.17 297.16-28.12 28.11zm65.17-325.27l33.83-5.72-5.72 33.84L340.7 199.43l33.94 33.94L496.01 112l15.84-93.73c1.43-10-7.01-19.69-18.1-18.1l-93.73 15.84-121.38 121.36 33.94 33.94L423.12 60.78zM199.45 340.69l-45.38 45.38-28.12-28.12 45.38-45.38-33.94-33.94-45.38 45.38-16.69-16.69c-6.25-6.25-16.38-6.25-22.62 0l-17.54 17.53a16 16 0 0 0-2.79 18.87L64 402.75 4.69 462.06c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L109.25 448l59.03 31.64c6.22 3.33 13.88 2.2 18.87-2.79l17.53-17.54c6.25-6.25 6.25-16.38 0-22.63L188 420l45.38-45.38-33.93-33.93z"
                ></path>
              </svg>
            }
            title={"Conquer"}
            description={`Conquer the world for your faction. Attack other factions to conquer their regions until only your faction is left. But dont forget to defend your new property.`}
          />
          <FeatureCard
            icon={
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="trophy"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="text-white w-6 h-6 m-1 flex-shrink-0 flex-grow-0"
                fill="currentColor"
                stroke="currentColor"
              >
                <path
                  fill="currentColor"
                  d="M448 64V16c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16v48H16C7.2 64 0 71.2 0 80v60.8C0 201.1 68.3 266 159.6 283.4c27.4 57.9 68.1 88.2 104.4 97.4V464h-64c-22.1 0-40 17.9-40 40 0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8 0-22.1-17.9-40-40-40h-64v-83.2c36.3-9.3 77-39.5 104.4-97.4C507.5 266.1 576 201.2 576 140.8V80c0-8.8-7.2-16-16-16H448zM48 140.8V112h80c0 39.2 2.1 76.2 12.3 116.8-55.1-18.9-92.3-58.9-92.3-88zM288 336c-53 0-112-78.4-112-216V48h224v72c0 140.5-60.8 216-112 216zm240-195.2c0 29.1-37.2 69.1-92.3 88C445.9 188.2 448 151.1 448 112h80v28.8z"
                ></path>
              </svg>
            }
            title={"Collaborate"}
            description={`Collaboration and Communication is the key to success. Coordinate with your allies to attack with your full strength and defend key regions. You wont make it alone.`}
          />
        </div>

        <div className="relative pt-16 pb-32 overflow-hidden">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
              How to play
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-600">
              In order to win the game your faction needs to control all regions
              of the game world. To conquer a region your faction must attack it
              with more soldiers than the defenders are willing to deploy as
              garrison.
            </p>
          </div>
          
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      PLB
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                      You need to burn PLB to pay for attacking soldiers or
                      garrisons or worker. Worker allow you to farm PLB in your
                      regions.
                      <br />
                      Your pleb production is calculated as follows <br />(
                      <span className="font-semibold">PLBs</span>/{" "}
                      <span className="font-semibold">Total Worker</span>) *{" "}
                      <span className="font-semibold">Your Worker</span>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="/assets/images/coinIconRegular.svg"
                    alt="Inbox user interface"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Region Tiers
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                      The rate of PLB production is determined by a regions
                      tier. This tier also determines how many worker can be
                      deployed.
                      <br /> <br /> All regions start at tier 0. <br /> To
                      increase the tier you have to deploy a certain amount of
                      garrison. This not only allows you to deploy more worker
                      but also yields more PLB.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-start-1">
                <div className="mt-24">
                  <table>
                    <tbody>
                      <tr>
                        <th>
                          <td
                            className={`w-28 h-28 ${getBorderForRegionTier(0)}`}
                          >
                            Tier 0
                          </td>
                          <td
                            className={`w-28 h-28 ${getBorderForRegionTier(1)}`}
                          >
                            Tier 1
                          </td>
                          <td
                            className={`w-28 h-28 ${getBorderForRegionTier(2)}`}
                          >
                            Tier 2
                          </td>
                          <td
                            className={`w-28 h-28 ${getBorderForRegionTier(3)}`}
                          >
                            Tier 3
                          </td>
                          <td
                            className={`w-28 h-28 ${getBorderForRegionTier(4)}`}
                          >
                            Tier 4
                          </td>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Actions and Neighbors
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                      In regions of your faction you have three available
                      actions. Deploy worker or garrison and claim PLB. If the
                      region is besieged you can only deploy more garrison.
                      <br />
                      Areas of other factions you can either attack or deploy
                      garrisons to bolster their defenses.
                      <br />
                      If two enemies are already in a battle you can join either
                      side.
                      <br />
                      <br />
                      Your subjects need a way to travel to the region.
                      Therefore all actions besides claiming PLB require that
                      the region has atleast one neighbor of your faction which
                      is not besieged.
                      <br />
                      Regions at the border of the map dont have this
                      requirement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="">
                  <table className="w-96 h-96">
                    <tr className="w-full">
                      <td className="bg-red-500">
                        <div className="w-full flex flex-col mx-auto px-4">
                          <div className="pl-4 w-full mx-auto flex flex-row items-center">
                            <img
                              src="/assets/images/shieldIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{1400}</p>
                          </div>
                          <div className="pl-4 flex flex-row items-center">
                            <img
                              src="/assets/images/shovelIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{1000}</p>
                          </div>
                        </div>
                      </td>
                      <td className="bg-yellow-400">
                        <div className="w-full flex flex-col mx-auto px-4">
                          <div className="pl-4 w-full mx-auto flex flex-row items-center">
                            <img
                              src="/assets/images/shieldIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{800}</p>
                          </div>
                          <div className="pl-4 flex flex-row items-center">
                            <img
                              src="/assets/images/shovelIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{1200}</p>
                          </div>
                        </div>
                      </td>
                      <td className="bg-green-500">
                        <div className="w-full flex flex-col mx-auto px-4">
                          <div className="pl-4 w-full mx-auto flex flex-row items-center">
                            <img
                              src="/assets/images/shieldIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{1400}</p>
                          </div>
                          <div className="pl-4 flex flex-row items-center">
                            <img
                              src="/assets/images/shovelIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{1000}</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-red-500">
                        <div className="w-full flex flex-col mx-auto px-4">
                          <div className="pl-4 w-full mx-auto flex flex-row items-center">
                            <img
                              src="/assets/images/shieldIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{1100}</p>
                          </div>
                          <div className="pl-4 flex flex-row items-center">
                            <img
                              src="/assets/images/shovelIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{2000}</p>
                          </div>
                        </div>
                      </td>
                      <td className="bg-red-500">
                        <div className="w-full flex flex-col mx-auto px-4">
                          <div className="pl-4 w-full mx-auto flex flex-row items-center">
                            <img
                              src="/assets/images/shieldIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{1340}</p>
                          </div>
                          <div className="pl-4 flex flex-row items-center">
                            <img
                              src="/assets/images/shovelIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{100}</p>
                          </div>
                        </div>
                      </td>
                      <td className="bg-blue-500">
                        <div className="w-full flex flex-col mx-auto px-4">
                          <div className="pl-4 w-full mx-auto flex flex-row items-center">
                            <img
                              src="/assets/images/shieldIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{1120}</p>
                          </div>
                          <div className="pl-4 flex flex-row items-center">
                            <img
                              src="/assets/images/shovelIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{50}</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-blue-500">
                        <div className="w-full flex flex-col mx-auto px-4">
                          <div className="pl-4 w-full mx-auto flex flex-row items-center">
                            <img
                              src="/assets/images/shieldIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{2102}</p>
                          </div>
                          <div className="pl-4 flex flex-row items-center">
                            <img
                              src="/assets/images/shovelIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{1430}</p>
                          </div>
                        </div>
                      </td>
                      <td className="bg-green-500">
                        <div className="w-full flex flex-col mx-auto px-4">
                          <div className="pl-4 w-full mx-auto flex flex-row items-center">
                            <img
                              src="/assets/images/shieldIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{200}</p>
                          </div>
                          <div className="pl-4 flex flex-row items-center">
                            <img
                              src="/assets/images/shovelIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{1560}</p>
                          </div>
                        </div>
                      </td>
                      <td className="bg-yellow-400">
                        <div className="w-full flex flex-col mx-auto px-4">
                          <div className="pl-4 w-full mx-auto flex flex-row items-center">
                            <img
                              src="/assets/images/shieldIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{1400}</p>
                          </div>
                          <div className="pl-4 flex flex-row items-center">
                            <img
                              src="/assets/images/shovelIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{1000}</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Attack and Sieges
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                      When you attack a region its besieged. A siege is split in
                      two phases. In the first phase (
                      <span className="font-semibold">Rally</span>) all attacker
                      and defender can throw more soldier in the region without
                      any danger. <br />
                      <br />
                      Once{" "}
                      <span className="font-semibold inline-flex">
                        Rally Time{" "}
                        <div className="inline-flex mt-1">
                          <CustomTooltip id="rally">
                            <div className="w-60">
                              <p>
                                With the overwhelming rule, only large player
                                could initate an attack on a region since
                                smaller players would be immedeately wiped out.
                                Therefore attacker can use the RALLY_TIME as a
                                window to coordinate and bolster there attack
                                before it fully counts. This also gives player
                                from other timezones the chance to participate
                                in a meaningful way.
                              </p>
                            </div>
                          </CustomTooltip>
                        </div>
                      </span>{" "}
                      is over though its getting dangerous. Whenever one army
                      has{" "}
                      <span className="font-semibold inline-flex">
                        Overwhelmingly
                        <div className="inline-flex mt-1">
                          <CustomTooltip id="overwhelm">
                            <div className="w-60">
                              <p>
                                This is done so people can not just throw one
                                soldier at a region and instantly block the
                                region from actions without commiting any
                                ressources.
                              </p>
                            </div>
                          </CustomTooltip>
                        </div>
                      </span>{" "}
                      more soldiers than the other army they instantly win the
                      battle. Additionally they will also loose less troops than
                      if the battle would be closer. <br />
                      <br />A battle ends automatically after the{" "}
                      <span className="font-semibold">Siege Time</span> is over.
                      If at this point the attacker have more soldier than the
                      defender they win otherwise the defender do.
                      <br />
                      <br /> A region will get an{" "}
                      <span className="font-semibold">
                        Attach Cooldown
                      </span>{" "}
                      when successfully defended to give the defender some time
                      to breath.
                    </p>
                  </div>
                </div>
              </div>

              <div className=" lg:col-start-1">
                <div className="mt-20">
                  <table className="w-96 h-96">
                    <tr className="w-full">
                      <td className="bg-red-500">
                        <div className="w-full flex flex-col mx-auto px-4">
                          <div className="pl-4 w-full mx-auto flex flex-row items-center">
                            <img
                              src="/assets/images/shieldIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{1400}</p>
                          </div>
                          <div className="pl-4 flex flex-row items-center">
                            <img
                              src="/assets/images/shovelIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{1000}</p>
                          </div>
                        </div>
                      </td>
                      <td className="bg-yellow-400">
                        <div className="w-full flex flex-col mx-auto px-4">
                          <div className="pl-4 w-full mx-auto flex flex-row items-center">
                            <img
                              src="/assets/images/shieldIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{800}</p>
                          </div>
                          <div className="pl-4 flex flex-row items-center">
                            <img
                              src="/assets/images/shovelIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{1200}</p>
                          </div>
                        </div>
                      </td>
                      <td className="bg-green-500">
                        <div className="w-full flex flex-col mx-auto px-4">
                          <div className="pl-4 w-full mx-auto flex flex-row items-center">
                            <img
                              src="/assets/images/shieldIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{1400}</p>
                          </div>
                          <div className="pl-4 flex flex-row items-center">
                            <img
                              src="/assets/images/shovelIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{1000}</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-red-500">
                        <div className="w-full flex flex-col mx-auto px-4">
                          <div className="pl-4 w-full mx-auto flex flex-row items-center">
                            <img
                              src="/assets/images/shieldIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{1100}</p>
                          </div>
                          <div className="pl-4 flex flex-row items-center">
                            <img
                              src="/assets/images/shovelIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{2000}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 w-1/3 bg-red-500">
                        <div className="px-4 w-full flex flex-row items-center">
                          <div className="flex flex-col justify-center">
                            <div
                              className={`w-4 h-4 border border-gray-700 ${getFactionColor(
                                Faction.Yellow
                              )}`}
                            ></div>
                          </div>
                          <div className="flex flex-col justify-center flex-shrink-0 flex-grow-0 px-2">
                            <img
                              src="/assets/images/swordIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <img
                              src="/assets/images/trophyIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mb-1"
                            />
                            <div
                              className={`w-4 h-4 border border-gray-700 ${getFactionColor(
                                Faction.Red
                              )}`}
                            ></div>
                          </div>
                        </div>
                        <div className="w-full px-3 mx-auto flex flex-row items-center">
                          <div
                            className={`w-full h-2 mt-4 border border-gray-700 ${getFactionColor(
                              Faction.Red
                            )}`}
                          >
                            <div
                              className={`h-2 ${getFactionColor(
                                Faction.Yellow
                              )}`}
                              style={{
                                width: `27%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="bg-blue-500">
                        <div className="w-full flex flex-col mx-auto px-4">
                          <div className="pl-4 w-full mx-auto flex flex-row items-center">
                            <img
                              src="/assets/images/shieldIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{1120}</p>
                          </div>
                          <div className="pl-4 flex flex-row items-center">
                            <img
                              src="/assets/images/shovelIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{50}</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-1/3 px-4 bg-blue-500">
                        <div className="px-4 w-full flex flex-row items-center">
                          <div className="flex flex-col justify-center">
                            <div
                              className={`w-4 h-4 border border-gray-700 ${getFactionColor(
                                Faction.Red
                              )}`}
                            ></div>
                          </div>
                          <div className="flex flex-col justify-center flex-shrink-0 flex-grow-0 px-2">
                            <img
                              src="/assets/images/swordIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <img
                              src="/assets/images/trophyIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mb-1"
                            />
                            <div
                              className={`w-4 h-4 border border-gray-700 ${getFactionColor(
                                Faction.Blue
                              )}`}
                            ></div>
                          </div>
                        </div>
                        <div className="w-full px-3 mx-auto flex flex-row items-center">
                          <div
                            className={`w-full h-2 mt-4 border border-gray-700 ${getFactionColor(
                              Faction.Blue
                            )}`}
                          >
                            <div
                              className={`h-2 ${getFactionColor(Faction.Red)}`}
                              style={{
                                width: `52%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="bg-green-500">
                        <div className="w-full flex flex-col mx-auto px-4">
                          <div className="pl-4 w-full mx-auto flex flex-row items-center">
                            <img
                              src="/assets/images/shieldIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{200}</p>
                          </div>
                          <div className="pl-4 flex flex-row items-center">
                            <img
                              src="/assets/images/shovelIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mr-1"
                            />
                            <p>{1560}</p>
                          </div>
                        </div>
                      </td>
                      <td className="w-1/3 px-4 bg-yellow-400">
                        <div className="px-4 w-full flex flex-row items-center">
                          <div className="flex flex-col justify-center">
                            <img
                              src="/assets/images/skullIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mb-1"
                            />
                            <div
                              className={`w-4 h-4 border border-gray-700 ${getFactionColor(
                                Faction.Green
                              )}`}
                            ></div>
                          </div>
                          <div className="flex flex-col justify-center flex-shrink-0 flex-grow-0 px-2">
                            <img
                              src="/assets/images/swordIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <img
                              src="/assets/images/trophyIconRegular.svg"
                              className="w-4 h-4 flex-shrink-0 flex-grow-0 mb-1"
                            />
                            <div
                              className={`w-4 h-4 border border-gray-700 ${getFactionColor(
                                Faction.Yellow
                              )}`}
                            ></div>
                          </div>
                        </div>
                        <div className="w-full px-3 mx-auto flex flex-row items-center">
                          <div
                            className={`w-full h-2 mt-4 border border-gray-700 ${getFactionColor(
                              Faction.Yellow
                            )}`}
                          >
                            <div
                              className={`h-2 ${getFactionColor(
                                Faction.Green
                              )}`}
                              style={{
                                width: `4%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-12">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Game State
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                      The game state gets refreshed every 30s and after you take
                      an action. <br /> Sometimes though the game state might
                      update to much before your action gets processed which can
                      lead to a revert. Dont worry though none of your PLB will
                      be burned from an reverting action. Just wait a second and
                      resubmit your action.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 mt-24 ml-24 w-52 h-52">
                  <CircularProgressbar
                    value={(100 / 30) * 21}
                    text={`${21}s`}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Need Help?
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                      If you want to check out the settings of the game hover
                      over the settings icon. <br />
                      In order to get back to the landing page simply click the
                      question mark icon.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-start-1">
                <div className="mt-24 pr-4 lg:relative lg:h-full">
                  <div className="w-full h-16 flex flex-row bg-white shadow justify-evenly">
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
                      className="text-gray-500 mt-2 w-12 h-12 cursor-pointer hover:text-gray-300"
                    >
                      <path
                        fill="currentColor"
                        d="M452.515 237l31.843-18.382c9.426-5.441 13.996-16.542 11.177-27.054-11.404-42.531-33.842-80.547-64.058-110.797-7.68-7.688-19.575-9.246-28.985-3.811l-31.785 18.358a196.276 196.276 0 0 0-32.899-19.02V39.541a24.016 24.016 0 0 0-17.842-23.206c-41.761-11.107-86.117-11.121-127.93-.001-10.519 2.798-17.844 12.321-17.844 23.206v36.753a196.276 196.276 0 0 0-32.899 19.02l-31.785-18.358c-9.41-5.435-21.305-3.877-28.985 3.811-30.216 30.25-52.654 68.265-64.058 110.797-2.819 10.512 1.751 21.613 11.177 27.054L59.485 237a197.715 197.715 0 0 0 0 37.999l-31.843 18.382c-9.426 5.441-13.996 16.542-11.177 27.054 11.404 42.531 33.842 80.547 64.058 110.797 7.68 7.688 19.575 9.246 28.985 3.811l31.785-18.358a196.202 196.202 0 0 0 32.899 19.019v36.753a24.016 24.016 0 0 0 17.842 23.206c41.761 11.107 86.117 11.122 127.93.001 10.519-2.798 17.844-12.321 17.844-23.206v-36.753a196.34 196.34 0 0 0 32.899-19.019l31.785 18.358c9.41 5.435 21.305 3.877 28.985-3.811 30.216-30.25 52.654-68.266 64.058-110.797 2.819-10.512-1.751-21.613-11.177-27.054L452.515 275c1.22-12.65 1.22-25.35 0-38zm-52.679 63.019l43.819 25.289a200.138 200.138 0 0 1-33.849 58.528l-43.829-25.309c-31.984 27.397-36.659 30.077-76.168 44.029v50.599a200.917 200.917 0 0 1-67.618 0v-50.599c-39.504-13.95-44.196-16.642-76.168-44.029l-43.829 25.309a200.15 200.15 0 0 1-33.849-58.528l43.819-25.289c-7.63-41.299-7.634-46.719 0-88.038l-43.819-25.289c7.85-21.229 19.31-41.049 33.849-58.529l43.829 25.309c31.984-27.397 36.66-30.078 76.168-44.029V58.845a200.917 200.917 0 0 1 67.618 0v50.599c39.504 13.95 44.196 16.642 76.168 44.029l43.829-25.309a200.143 200.143 0 0 1 33.849 58.529l-43.819 25.289c7.631 41.3 7.634 46.718 0 88.037zM256 160c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 144c-26.468 0-48-21.532-48-48 0-26.467 21.532-48 48-48s48 21.533 48 48c0 26.468-21.532 48-48 48z"
                      ></path>
                    </svg>
                    <svg
                      className="text-gray-500 mt-2 w-12 h-12 cursor-pointer hover:text-gray-300"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="question-circle"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      stroke="currentColor"
                    >
                      <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 text-center text-lg text-gray-600">
            <p>
              Visit the{" "}
              <a
                href="https://discord.gg/hwWKNyH9uj"
                className="text-blue-600 hover:text-blue-700"
              >
                discord
              </a>{" "}
              to join the community or follow me on{" "}
              <a
                href="https://twitter.com/Leon_Niesler"
                className="text-blue-600 hover:text-blue-700"
              >
                twitter
              </a>{" "}
              for new updates.
            </p>
            <p>
              If you want to build your own frontend, have ideas or want to
              contribute to the V2 of phantomRisk please reach out to me. Id
              love to work with you :)
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
