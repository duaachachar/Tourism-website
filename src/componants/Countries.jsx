import React from "react";
import Img1 from "../assets/bangladesh.png";
import Img2 from "../assets/thailand.jpg";
import Img3 from "../assets/vitenam.jpg";
import Img4 from "../assets/malaysia.jpg";
import Img5 from "../assets/indonesia.jpg";
import Img6 from "../assets/cambodia.jpg";

const Products = [
  {
    id:1,
    img: Img1,
    name: "Bangladesh",
    title: `Bangladesh located in South Asia is a country of stunning natural beauty
    and rich cultural heritage. It is home to the world's largest mangrove forest,
    the Sundarbans, and the longest unbroken sea beach, Cox's Bazar. The
    country's vibrant traditions, from colorful festivals to ancient architecture like
    the historic mosques of Bagerhat offer a glimpse into its deep history.
    Bangladesh is also known for its rivers, lush landscapes, and friendly people...`,
  },
  {
    id:2,
    img: Img2,
    name: "Thailand",
    title: `Thailand, often called the 'Land of Smiles,' is a Southeast Asian gem known
for its tropical beaches, opulent royal palaces, and ornate temples such as
Wat Arun and Wat Phra Kaew. Beyond its bustling cities like Bangkok,
Thailand offers serene islands like Phuket and Koh Samui, where travelers
can relax on pristine beaches. Its rich culinary traditions, from street food to
fine dining, along with cultural festivals like Songkran, attract millions ...`,
  },
  {
    id:3,
    img: Img3,
    name: "Vitenam",
    title: `Vietnam is a country of incredible natural beauty, from the terraced rice
fields in the north to the intricate network of rivers in the Mekong Delta. The
country offers a rich cultural history, with ancient cities like Hanoi and Hue,
and iconic landmarks such as Halong Bay and the Cu Chi Tunnels. Vietnam's
cuisine is world-famous, with dishes like pho and banh mi attracting food
lovers from around the globe. Visitors can explore both bustling cities a...`,
  },
  {
    id:4,
    img: Img4,
    name: "Malaysia",
    title: `Malaysia is a Southeast Asian country known for its modern cities
rainforests, and cultural diversity. Kuala Lumpur, the capital, is home to the
iconic Petronas Twin Towers, while Penang offers a rich colonial history anc
diverse culinary experiences. Malaysia's natural beauty is equally impressive
with the rainforests of Borneo, pristine beaches in Langkawi, and world-class
diving spots in Sipadan. The country's blend of Malay, Chinese, Indian, a...`,
  },
  {
    id:5,
    img: Img5,
    name: "Indonesia",
    title: `Indonesia is the world's largest archipelago, consisting of over 17,000
islands, each with its unique charm and natural beauty. Famous destinations
like Bali attract visitors with its stunning beaches, terraced rice fields, and
vibrant arts scene. Indonesia also offers incredible biodiversity, with world-
renowned diving spots in the Coral Triangle and breathtaking landscapes
such as Mount Bromo and Komodo National Park. Its diverse culture, shap....`,
  },
  {
    id:6,
    img: Img6,
    name: "Cambodia",
    title: `Cambodia, located in the heart of Southeast Asia, is a country steeped ir
history and culture. It is home to one of the world's most significan
archaeological sites, Angkor Wat, an ancient temple complex that draw.
millions of visitors each year. Beyond its ancient temples, Cambodia boast.
vibrant cities like Phnom Penh, pristine beaches along its coastline, and the
hoautifill Tonlo Can lavo Tho rocilionce and hocnitality of the Cambodil`,
  },
];

const Countries = () => {

  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-14">
        All <span className="text-green-600">Countries.</span>
      </h1>
      <div className="mx-5 px-5 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Products?.map((items) => {
            return (
              <div className="border-b shadow-md shadow-slate-600 flex flex-col justify-between h-full rounded group relative">
                <div>
                  <div className="relative group">
                    <img
                      className="w-full h-[230px] object-cover rounded"
                      src={items.img}
                    />
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-lg">
                      View Details
                    </div>
                  </div>

                  <h1 className="ms-5 my-1 font-normal">{items.title}</h1>
                </div>
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                  {items.tooltipText || items.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Countries;
