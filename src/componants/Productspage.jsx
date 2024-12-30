import React from "react";
import Products from "./Products";
import Img1 from '../assets/kuala.webp'
import Img2 from '../assets/penang.webp'
import Img3 from '../assets/quang.jpg'
import Img4 from '../assets/hanoi.jpg'
import Img5 from '../assets/Chattogram.jpg'

const ProductItems = [
  {
    img: Img1,
    title: "Petronas Towers",
    price: " $150",
    visitors: "12000",
    season: "spring",
    days: "3 days 2 nights",
  },
  {
    img: Img2,
    title: "George Town",
    price: " $180",
    visitors: "95000",
    season: "winter",
    days: "3 days 2 nights",
  },
  {
    img: Img3,
    title: "Halong Bay",
    price: " $250",
    visitors: "150000",
    season: "spring",
    days: "4 days 3 nights",
  },
  {
    img: Img4,
    title: "Hanoi",
    price: " $180",
    visitors: "95000",
    season: "summer",
    days: "5 days 4 nights",
  },
  {
    img: Img5,
    title: "idk",
    price: " $67",
    visitors: "67",
    season: "fgh",
    days: "67 days 66 nights",
  },
];

const Productspage = () => {
  return (
    <div>
      <Products />
      <div className="m-5 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ProductItems?.map((items) => {
            return (
              <div className="border-b shadow-md shadow-slate-600 flex flex-col justify-between h-[470px] rounded ">
                <div>
                  <img
                    className="w-full h-[230px] object-cover rounded"
                    src={items.img}
                    alt="chiang"
                  />
                  <h1 className="text-2xl ms-5 my-1 font-bold">
                    {items.title}
                  </h1>
                  <p className="ms-5 my-1 text-lg fst-italic">
                    <em>Average Cost: {items.price}</em>
                  </p>
                  <span className="ms-5 my-1 text-md fw-semibold">
                    Total Visitors Per Year: {items.visitors}
                  </span>
                  <div className="flex ms-5 my-1 ">
                    <span className="me-5">Seasonality:</span>
                    <button className="bg-pink-300 px-3 rounded-full">
                      {items.season}
                    </button>
                  </div>
                  <span className="ms-5 my-1 ">{items.days}</span>
                  <div className="text-center mt-7">
                    <button className="border border-green-500 py-2 px-14 text-black text-lg font-semibold rounded-md mx-3 hover:bg-green-500 hover:text-white shadow-[4px_4px_0px_rgba(34,197,94,1)] transition duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Productspage;
