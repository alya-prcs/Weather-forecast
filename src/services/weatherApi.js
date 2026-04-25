const API_KEY = "94b3dfdaee8ef14fd2e290dda237296c";

export const getWeather = async (city) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
    );

    const data = await res.json();

    // 🔴 якщо місто не знайдено
    if (data.cod !== "200") {
      throw new Error(data.message);
    }

    return data;

  } catch (error) {
    console.error("API error:", error.message);
    return null; // 🔥 важливо
  }
};