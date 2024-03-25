import React from "react";
import { FaPhoneVolume } from "react-icons/fa";
const Features = () => {
  return (
    <div>
      <section className="m-4 md:m-8   dark:text-gray-300">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
          <h2 className="text-5xl font-bold text-white">Our advantages</h2>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-earth-lock dark:text-violet-400 w-12 h-12"
            >
              <path d="M7 3.34V5a3 3 0 0 0 3 3" />
              <path d="M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
              <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
              <path d="M12 2a10 10 0 1 0 9.54 13" />
              <path d="M20 6V4a2 2 0 1 0-4 0v2" />
              <rect width="8" height="5" x="14" y="6" rx="1" />
            </svg>
            <h3 className="my-3 text-3xl font-semibold text-white">Security</h3>
            <div className="space-y-1 leading-tight">
              <p>Protecting your information</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-bitcoin w-12 h-12 dark:text-violet-400"
            >
              <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
            </svg>
            <h3 className="my-3 text-3xl font-semibold text-white">
              Daily payments
            </h3>
            <div className="space-y-1 leading-tight">
              <p>Receive your rewards in your wallet</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-headset   w-12 h-12 dark:text-violet-400"
            >
              <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
              <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
            </svg>
            <h3 className="my-3 text-3xl font-semibold text-white">
              Support 24/7
            </h3>
            <div className="space-y-1 leading-tight">
              <p>Ask anything we will be happy to assist</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
