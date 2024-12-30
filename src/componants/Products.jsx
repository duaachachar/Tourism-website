import React from "react";
import Img1 from "../assets/khulna.jpg";
import Img2 from "../assets/krabi.jpg";
import Img3 from "../assets/cox bazar.jpg";
import Img4 from "../assets/chiang.jpg";
import Img5 from "../assets/magelang.jpg";
import Img6 from "../assets/bali.jpg";
import { Link } from "react-router-dom";

const ProductItems = [
  {
    img: Img1,
    title: "Sundarbans",
    price: " $35",
    visitors: "25000",
    season: "summer",
    days: "4 days 3 nights",
  },
  {
    img: Img2,
    title: "Phi Phi Islands",
    price: " $167",
    visitors: "75000",
    season: "winter",
    days: "5 days 4 nights",
  },
  {
    img: Img3,
    title: "Coxs Bazar Beach",
    price: " $150",
    visitors: "80000",
    season: "summer",
    days: "4 days 3 nights",
  },
  {
    img: Img4,
    title: "Chiang Mai",
    price: " $250",
    visitors: "50000",
    season: "winter",
    days: "3 days 2 nights",
  },
  {
    img: Img5,
    title: "Borobudur",
    price: " $300",
    visitors: "150000",
    season: "spring",
    days: "3 days 2 nights",
  },
  {
    img: Img6,
    title: "Bali",
    price: " $350",
    visitors: "60000",
    season: "summer",
    days: "7 days 6 nights",
  },
];

const Products = () => {
  return (
    <div className="m-5 px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ProductItems?.map((items) => {
          return (
            <Link to='/products'>
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
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
