import React, { useState } from "react";
import PackagesInfo from "./PackagesInfo";

const Packages = () => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const handlePeriodChange = (period) => {
    setBillingPeriod(period);
  };

  return (
    <div>
      <section className="py-6 text-white  ">
        <div className="container mx-auto p-4 sm:p-10">
          <div className="mb-16 space-y-4 text-center">
            <h1 className="text-4xl font-semibold leading-tight">Pricing</h1>
            <p className="px-4 sm:px-8 lg:px-24">
              Here are our Pricing Plans, choose your offers
            </p>
            <div>
              <button
                onClick={() => handlePeriodChange("monthly")}
                className={`${
                  billingPeriod === "monthly"
                    ? "bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"
                    : ""
                } px-4 py-1 font-semibold border rounded-l-lg dark:border-violet-600 dark:text-gray-50`}
              >
                Monthly
              </button>
              <button
                onClick={() => handlePeriodChange("annually")}
                className={`${
                  billingPeriod === "annually"
                    ? "bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"
                    : ""
                } px-4 py-1 border rounded-r-lg dark:border-violet-500`}
              >
                Annually
              </button>
            </div>
          </div>
          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:max-w-full lg:gap-2 xl:gap-6 lg:grid-cols-3">
            {PackagesInfo.map((pkg, index) => (
              <div
                key={index}
                className="relative z-0 flex flex-col items-center p-8 border rounded-md"
              >
                <span className="absolute top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br">
                  {pkg.name}
                </span>
                <p className="my-6 text-4xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
                  {billingPeriod === "monthly"
                    ? pkg.monthlyPrice
                    : pkg.annuallyPrice}
                </p>
                <ul className="flex-1 space-y-2">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 dark:text-violet-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        ></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="px-4 py-2 mt-4 font-semibold uppercase border rounded-lg border-violet-500 md:mt-12 sm:py-3 sm:px-8 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br">
                  Subscribe
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
