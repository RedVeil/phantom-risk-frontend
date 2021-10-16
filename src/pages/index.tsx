import FeatureCard from "src/components/landing/FeatureCard";

export default function Index(): JSX.Element {
  return (
    <div className="w-full min-h-screen bg-gray-200">
      <div className="w-2/3 mx-auto">
        <div className="relative overflow-hidden">
          <div className="relative pt-6 pb-16 sm:pb-24">
            <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Conquer the World for your Faction</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  PhantomRisk is a massive multiplayer strategy game running on the blockchain.<br/> Join one of four factions, build an economy and fight alongside your allies until you are the only faction left standing.
                </p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                  <div className="rounded-md shadow">
                    <a
                      href="/game"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Join Game
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
{/* 
        <div className="relative pt-16 pb-32 overflow-hidden">
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Stay on top of customer support
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Semper curabitur ullamcorper posuere nunc sed. Ornare
                      iaculis bibendum malesuada faucibus lacinia porttitor.
                      Pulvinar laoreet sagittis viverra duis. In venenatis sem
                      arcu pretium pharetra at. Lectus viverra dui tellus ornare
                      pharetra.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                    alt="Inbox user interface"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Better understand your customers
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Semper curabitur ullamcorper posuere nunc sed. Ornare
                      iaculis bibendum malesuada faucibus lacinia porttitor.
                      Pulvinar laoreet sagittis viverra duis. In venenatis sem
                      arcu pretium pharetra at. Lectus viverra dui tellus ornare
                      pharetra.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                    alt="Customer profile user interface"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
