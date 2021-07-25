import React, { useEffect, useState } from "react";

import Navbar from "@components/Navbars/Navbar";
import LocationCard from "@components/Cards/LocationCard";
import NewCityCard from "@components/Cards/NewCityCard";

const DEFAULT_CITIES = ["Acapulco", "Almunecar"];

const CITIES_LOCAL_STORAGE_KEY = 'cities';

const Dashboard: React.FC = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const localCities = localStorage.getItem(CITIES_LOCAL_STORAGE_KEY);
    if (localCities === undefined || localCities === null || JSON.parse(localCities).length === 0) {
      localStorage.setItem(CITIES_LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_CITIES));
      setCities(DEFAULT_CITIES);
    } else {
      setCities(JSON.parse(localCities));
    } 
  }, []);

	useEffect(() => () => {
      localStorage.setItem(CITIES_LOCAL_STORAGE_KEY, JSON.stringify(cities));
	}, [cities])

  return (
    <>
      <Navbar title="Dashboard" />
      <div className="flex flex-1 mx-4 h-screen flex-wrap flex-col">
        {cities.map((city) => (
          <LocationCard city={city} />
        ))}
        <NewCityCard addCity={(city: string) => setCities([...cities, city])} />
      </div>
    </>
  );
};

export default Dashboard;
