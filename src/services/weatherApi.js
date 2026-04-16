const API_KEY = "94b3dfdaee8ef14fd2e290dda237296c";

export const getWeather = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );

  const data = await res.json();
  return data;
};