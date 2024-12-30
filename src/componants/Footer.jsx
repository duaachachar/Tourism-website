import React from "react";

const Footer = () => {
  return (
    <div className="bg-black mt-14 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-white max-w-7xl mx-auto px-8">
        {/* Column 1 */}
        <div className="text-start">
          <h1 className="text-3xl font-bold text-green-500">Tourism</h1>
          <p className="mt-4">Location: Oxyzen, Chattogram</p>
          <p>Phone: +8801991785857</p>
          <p>Email: afsar291722@gmail.com</p>
          <p>Opening hours: 9.00 AM - 5.00 PM</p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Useful Links</h2>
          <ul className="space-y-4">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">
              All Tourists Spot
            </li>
            <li className="hover:underline cursor-pointer">Login</li>
            <li className="hover:underline cursor-pointer">Register</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="text-start">
          <h2 className="text-2xl font-bold mb-6">Drop a Message</h2>
          <label
            htmlFor="email-input"
            className="block mb-2 text-sm font-medium text-white"
          >
            Enter your email
          </label>
          <div className="flex items-center">
            <input
              type="email"
              id="email-input"
              placeholder="Enter your email"
              className="w-3/4 p-2 rounded-md bg-gray-800 border border-gray-600 text-white text-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
