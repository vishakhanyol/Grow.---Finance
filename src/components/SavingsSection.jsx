import React from "react";
import Headerimg from "/Users/vishakhanyol/Desktop/data-finance/src/components/Headerimg.png";

const SavingsSection = () => {
  return (
    <header className="relative bg-gray-900 text-white">
      {/* Logo */}
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between w-full py-4 bg-transparent px-8 z-20">
        <a href="#" className="text-3xl font-bold text-purple-800 ml-4">
          Grow.
        </a>
        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button className="text-gray-300 hover:text-gray-400 focus:outline-none">
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
              />
            </svg>
          </button>
        </div>
        {/* Navbar */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <a href="#" className="text-gray-300 hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-gray-400">
              Accounts
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-gray-400">
              Help Centre
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-gray-400">
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-0.5xl font-bold text-purple-400 ml-4 hover:text-purple-800"
            >
              Login
            </a>
          </li>
          <li>
            <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-lg ml-4">
              Sign Up
            </button>
          </li>
        </ul>
      </nav>

      <div className="relative h-screen flex items-center justify-center">
        <img
          src={Headerimg}
          alt="Background"
          className="absolute inset-0 object-cover w-full h-full opacity-40"
        />
        <div className="relative z-10 container mx-auto flex justify-between items-center mt-8 px-8">
          {/* Left Side */}
          <div className="max-w-md">
            <h1 className="text-7xl font-bold mb-5">
              Grow Your Savings with Us.
            </h1>
            <p className="text-lg mb-5">Open an Easy Access Account Today</p>
            <button className="bg-purple-700 text-white hover:bg-purple-900 py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out font-bold">
              Apply Now
            </button>
          </div>

          {/* Right Side */}
          <div className="max-w-sm bg-[black]/80 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl text-purple-700 font-semibold mb-2">
              Our Rates
            </h3>
            <p className="text-white">Gross Interest: 4.23%</p>
            <p className="text-white">AER Interest: 5.08%</p>
          </div>
        </div>
      </div>

      {/* Third Section - Cards */}
      <section className="bg-white text-white py-12 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-purple-700 font-bold mb-8 text-center">
            Get to Know Your Bank Account: A Quick Summary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[black]/60 rounded-lg p-6 shadow-2xl backdrop-blur-md bg-opacity-10 ">
            <h3 className="text-2xl font-semibold mb-4">
                You can deposit any amount between £1 and £250 at any time.
              </h3>
              <p className="text-lg text-gray-300">
                Deposit funds flexibly within the specified range.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[black]/60 rounded-lg p-6 shadow-2xl backdrop-blur-md bg-opacity-30">
              <h3 className="text-2xl font-semibold mb-4">
                There is a maximum deposit limit of £250.
              </h3>
              <p className="text-lg text-gray-300">
                Ensure deposits do not exceed the maximum limit.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-[black]/60 rounded-lg p-6 shadow-2xl backdrop-blur-md bg-opacity-30">
              <h3 className="text-2xl font-semibold mb-4">
                You can withdraw your money at any time without giving notice.
              </h3>
              <p className="text-lg text-gray-300">
                Enjoy flexibility in withdrawing your funds as needed.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-[black]/60 rounded-lg p-6 shadow-2xl backdrop-blur-md bg-opacity-30">
              <h3 className="text-2xl font-semibold mb-4">
                If your balance falls below £50, the interest rate will be
                reduced to 0.10% AER.
              </h3>
              <p className="text-lg text-gray-300">
                Maintain a minimum balance to maximize your interest rate.
              </p>
            </div>
            {/* Card 5 */}
            <div className="bg-[black]/60 rounded-lg p-6 shadow-2xl backdrop-blur-md bg-opacity-30">
              <h3 className="text-2xl font-semibold mb-4">
                Payments to and from your bank require a personal UK account in
                your name.
              </h3>
              <p className="text-lg text-gray-300">
                Ensure compliant, seamless transactions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default SavingsSection;
