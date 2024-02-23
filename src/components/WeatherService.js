const apiKey = "1f92601943976326ff75ab45cc79a99b";

export default {
  async getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else if (response.status === 404) {
        throw new Error("City not found");
      } else {
        throw new Error("Failed to fetch weather data");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  }
};

