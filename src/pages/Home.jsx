import { useState } from "react";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import WeatherList from "../components/WeatherList/WeatherList";

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
    </>
  );
}

export default Home;