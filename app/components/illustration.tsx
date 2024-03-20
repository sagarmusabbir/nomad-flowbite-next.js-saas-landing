import type { FC } from "react";

const IllustrationWithStatisticsSocialProof: FC = function () {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 ">
      <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16 xl:gap-16 ">
        <div className="text-gray-500 sm:text-lg">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Stats that matter
          </h2>
          <p className="mb-8 dark:text-gray-400 lg:text-xl">
            Our rigorous security and compliance standards are at the heart of
            all we do. We work tirelessly to protect you and your customers.
          </p>
          <div className="grid gap-6 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-1">
            <div className="flex">
              <div className="mr-4 shrink-0">
                <svg
                  aria-hidden
                  className="h-8 w-8 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="mb-1 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  $76 billion
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  24h trading volume on Flowbite exchange
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 shrink-0">
                <svg
                  aria-hidden
                  className="h-8 w-8 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="mb-1 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  90%
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  of U.S adults have bought from businesses using Flowbite
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 shrink-0">
                <svg
                  aria-hidden
                  className="h-8 w-8 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="mb-1 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  135+
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  currencies and payment methods supported
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 shrink-0">
                <svg
                  aria-hidden
                  className="h-8 w-8 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="mb-1 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  40%
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  countries with local acquiring optimizing acceptance rates
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="mx-auto mb-4 hidden sm:flex"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/table-professor.svg"
          alt="table professor illustration"
        />
      </div>
    </section>
  );
};

export default IllustrationWithStatisticsSocialProof;
