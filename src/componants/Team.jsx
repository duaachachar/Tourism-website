import React from "react";
import Img1 from "../assets/afsa.png";
import Img2 from "../assets/rene.webp";

const members = [
  {
    img: Img1,
    name: "Md. Afsar Hossain",
  },
  {
    img: Img2,
    name: "Rene McPherson",
  },
  {
    img: Img1,
    name: "Riley Paul",
  },
  {
    img: Img2,
    name: "Noor Shah",
  },
];

const Team = () => {
  return (
    <div className="mx-5 px-5">
      <h1 className="text-4xl font-bold text-center my-14">
        Meet <span className="text-green-600">Our Team|</span> Leaders
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {members?.map((items) => {
          return (
            <div className="border-b shadow-md shadow-slate-600 h-[350px] rounded flex flex-col p-5">
              <img className="h-[250px] mx-auto" src={items.img} alt="chiang" />
              <h1 className="ms-5 mt-2 text-xl font-bold text-slate-900">
                {items.name}
              </h1>
              <h1 className="ms-5 text-lg font-bold text-slate-400">CEO</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
