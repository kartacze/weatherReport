import axios from "axios";
import { useQuery } from "react-query";

const OPEN_WEATHER_API_KEY = "9defff8caf6f2108bce53a4ce4d3eb7b";

interface OpenWeatherApiResponse {
  weather: {
    icon: string;
    description: string;
  }[];
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
}

export const fetchWeather = async (city: string): Promise<OpenWeatherApiResponse | undefined> => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
  );
  return response.data;
};

export const useWeather = (city: string) => {
  return useQuery(["weather", city], () => fetchWeather(city), {
    retry: 0,
  });
};
