import { Fade } from "react-awesome-reveal";
import ArtCraftSection from "../Components/ArtCraftSection";
import Banner from "../Components/Banner";
import CraftItems from "../Components/CraftItems";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
        
      <CraftItems></CraftItems>



      <div className="md:mt-20 mt-9 mb-9 md:mb-20">
            <h1 className="md:text-5xl text-2xl mb-3 font-extrabold text-center text-orange-600">Explore Our Art And Craft Collection</h1>
<Fade>
<p className="text-center md:text-xl text-[14px] mx-auto lg:w-[1000px]">Explore a curated collection of artisanal creations, each crafted with passion and skill. Discover unique pieces ranging from handmade ceramics to intricate textiles, showcased in an elegant UI designed to inspire. Dive deeper into the craftsmanship with the View Details button, leading you to a page where every detail awaits.</p>

</Fade>
          </div>
      <ArtCraftSection></ArtCraftSection>
        </div>
    );
};

export default Home;
