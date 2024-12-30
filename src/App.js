import "./App.css";
import HeroImg from "./assets/hero-img.webp";
import Client from "./componants/Client";
import Countries from "./componants/Countries";
import Products from "./componants/Products";
import Team from "./componants/Team";

function App() {
  return (
    <div>
      

      <div className="mx-5 px-5">
        <img
          className="w-full h-[30vh] md:h-[50vh] object-cover mt-5 pt-5 rounded-3xl"
          src={HeroImg}
          alt="Hero"
        />
      </div>

      <h1 className="text-4xl font-bold text-center my-14">
        All <span className="text-green-600">Toursists_</span> Spot
      </h1>
      <Products />
      <Countries />
      <Team />
      <Client />
    </div>
  );
}

export default App;
