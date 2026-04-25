import { useState } from "react";

import SearchBar from "../components/SearchBar/SearchBar";
import WeatherListSignup from "../components/WeatherListSignup/WeatherListSignup";

import NewsSection from "../components/NewsSection/NewsSection";
import NatureSlider from "../components/NatureSlider/NatureSlider";
import Footer from "../components/Footer/Footer";
import HourlyForecast from "../components/HourlyForecast/HourlyForecast";

function SignupPage() {
  const [city, setCity] = useState("");

  const handleSearch = (cityName) => {
    setCity(cityName);
  };

  return (
    <>

      <SearchBar onSearch={handleSearch} />
      <WeatherListSignup city={city} />
  <HourlyForecast />
      <NewsSection/>
      <NatureSlider/>
      <Footer/>
    </>
  );
}

export default SignupPage;