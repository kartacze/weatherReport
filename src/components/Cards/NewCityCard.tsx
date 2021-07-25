import React, { useCallback, useState } from "react";

interface CardProps {
  addCity(city: string): void;
}

const NewCityCard: React.FC<CardProps> = ({ addCity }) => {
  const [opened, setOpened] = useState(false);

  const [newCityName, setNewCityName] = useState("");

	const handleNewCity = useCallback(() => {
   addCity(newCityName);
	 setOpened(false);
	 setNewCityName('');

	},[newCityName])

  return (
    <div className="h-16 mt-8 rounded-lg bg-gray-200 shadow-md w-full flex justify-between text-center p-2 align-center">
      {opened ? (
        <>
          <input
            autoFocus
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            value={newCityName}
            onChange={(e) => setNewCityName(e.target.value)}
          />
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ml-4 disabled:opacity-20"
            type="button"
            onClick={handleNewCity}
						disabled={newCityName === ''}
          >
            ADD
          </button>
        </>
      ) : (
        <>
          <button className="w-full" onClick={() => setOpened(true)}>+</button>
        </>
      )}
    </div>
  );
};

export default NewCityCard;
