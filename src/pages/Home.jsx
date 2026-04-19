import { useState } from "react";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import WeatherList from "../components/WeatherList/WeatherList";
import NewsSection from "../components/NewsSection/NewsSection";
import NatureSlider from "../components/NatureSlider/NatureSlider";
import Footer from "../components/Footer/Footer";


function Home() {
  const [city, setCity] = useState("");

  const handleSearch = (cityName) => {
    setCity(cityName);
  };

  return (
    <>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <WeatherList city={city} />
      <NewsSection/>
      <NatureSlider/>
      <Footer/>
    </>
  );
}

export default Home;