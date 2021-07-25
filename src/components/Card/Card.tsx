import React from "react";

import Link from "next/link";
import { useWeather } from "src/hooks";

interface CardProps {
  city: string;
}

const Card: React.FC<CardProps> = ({ city }) => {
  const { data, isLoading } = useWeather(city as string);

  return (
    <div>
      <Link href={`/weather/${city}`}>
        <a>
          <div
            className="h-16 mt-8 rounded-lg bg-gray-200 shadow-md w-full flex justify-between text-center p-5 align-center"
            key={city}
          >
            <h2>{city}</h2>
            <span className="text-xl">
              {isLoading ? "..." : data.main.temp + '°C'}
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Card;
