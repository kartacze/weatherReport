import React from "react";

import Link from "next/link";
import { useWeather } from "src/hooks";

interface CardProps {
  city: string;
}

const LocationCard: React.FC<CardProps> = ({ city }) => {
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
              {isLoading && "..."}
              {data ? (
                data.main.temp + "°C"
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              )}
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default LocationCard;
