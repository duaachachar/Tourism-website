import React from "react";
import Comma from "../assets/comma.png";
import Manager from "../assets/hossian.png";
import Shanta from "../assets/shanta.png";

const Client = () => {
  return (
    <div className="mx-5 px-5">
      <h1 className="text-4xl font-bold text-center my-14">
        All <span className="text-green-600">Clients.</span> Review
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        <div className="border-2 shadow-md shadow-green-600 h-auto rounded group relative p-5 border-green-300 overflow-hidden">
          <div className="flex justify-between items-center">
            <img src={Comma} alt="" className="w-8 h-8 object-contain" />
            <div className="flex space-x-1 text-4xl">
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
              <span className="text-gray-300">★</span>
            </div>
          </div>
          <p className="my-5 tracking-wide text-justify max-h-[150px] overflow-hidden">
            Working with "Tourism" company was a fantastic experience. Their
            team not only brought our ideas to life but exceeded our
            expectations with their innovative solutions and impeccable
            execution. The level of professionalism and creativity shown
            throughout the project was remarkable. We couldn’t be happier with
            the end result.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <img
              src={Manager}
              alt=""
              className="w-12 h-12 object-cover rounded-full"
            />
            <div>
              <h1 className="font-bold">Afsar Hossain</h1>
              <span className="font-bold text-slate-400">Manager</span>
            </div>
          </div>
        </div>

        <div className="border-2 shadow-md shadow-green-600 h-auto rounded group relative p-5 border-green-300 overflow-hidden">
          <div className="flex justify-between">
            <img src={Comma} alt="" className="w-8 h-8 object-contain" />
            <div className="flex space-x-1 text-4xl">
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
              <span className="text-gray-300">★</span>
            </div>
          </div>
          <p className="my-5 tracking-wide text-justify max-h-[150px] overflow-hidden">
            Collaborating with "Tourism" was an exceptional experience. Their
            team not only realized our ideas but also surpassed our expectations
            with their inventive solutions and flawless execution. The
            professionalism and creativity demonstrated throughout the project
            were outstanding. We are absolutely delighted with the final
            outcome.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <img
              src={Shanta}
              alt=""
              className="w-12 h-12 object-cover rounded-full"
            />
            <div>
              <h1 className="font-bold">Shanta Akhter</h1>
              <span className="font-bold text-slate-400">Manager</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
