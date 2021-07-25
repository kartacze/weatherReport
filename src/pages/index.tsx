import React, { useEffect, useState } from "react";

import Link from "next/link";

import Navbar from "@components/Navbars/Navbar";
import Card from "@components/Card/Card";

const DEFAULT_CITIES = ["Acapulco", "Almunecar"];


const Dashboard: React.FC = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const localCities = localStorage.getItem("cities");
    if (localCities === undefined || localCities === null) {
      localStorage.setItem("cities", JSON.stringify(DEFAULT_CITIES));
      setCities(DEFAULT_CITIES);
    } else {
      setCities(JSON.parse(localCities));
    }
  }, []);

  console.log("cities", cities);

  return (
    <>
      <Navbar title="Dashboard" />
      <div className="flex flex-1 mx-4 h-screen flex-wrap flex-col">
        {cities.map((city) => (
					<Card city={city} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
