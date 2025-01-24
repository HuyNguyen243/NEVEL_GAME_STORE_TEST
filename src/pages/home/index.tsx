import AboutComponent from "@/components/home/About";
import AboutUsComponent from "@/components/home/AboutUs";
import GamesComponent from "@/components/home/Games";
import OurGamesComponent from "@/components/home/OurGames";
import PartnersComponents from "@/components/home/Partners";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <AboutComponent />
      <AboutUsComponent />
      <OurGamesComponent />
      <GamesComponent />
      <PartnersComponents />
      <Footer />
    </div>
  );
};

export default HomePage;
