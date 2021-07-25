import React from "react";

import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/dist/client/router";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

import Navbar from "@components/Navbars/Navbar";
import { fetchWeather, useWeather } from "src/hooks";

const getHour = (date: Date) => `${date.getHours()}:${date.getMinutes()}`

interface TileProps {
  title: string;
  body: string;
}

const Tile: React.FC<TileProps> = ({ title, body }) => <div className="flex-1 flex flex-col">
<h4 className="text-l">{title}</h4>
<p className="text-3xl">{body}</p>
</div>;

const CityWeather: React.FC = () => {
  const router = useRouter();
  const { city } = router.query;
  const title = city ?? "...";

  const { data, isLoading } = useWeather(city as string);

  console.log("data", data);
  return (
    <>
      <Navbar title={title as string} />
      <main className="flex flex-1 m-4 ">
        {isLoading && <div> Loading ...</div>}
        {!isLoading && !data && <div>City Not Found</div>}
        {!isLoading && data && (
          <div className="flex md:flex-row flex-col flex-1 content-center justify-center ">
            <div className="flex justify-center flex-col m-5 md:m-auto text-center relative">
              <img
                className="absolute md:-right-16 -top-16 right-2"
                alt="weather icon"
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              />
              <p className="text-lg">{data.weather[0].description}</p>
              <p className="text-6xl">{data.main.temp}°C</p>
              <p className="text-lg">
                H: {data.main.temp_max}°C L: {data.main.temp_min}°C
              </p>
            </div>
            <div className="flex flex-row m-5 md:m-auto  text-center flex-wrap justify-center">
              <div className="h-32 border-b-2 border-r-2 w-1/2 p-4"><Tile title="Sunrise" body={getHour(new Date((data.sys.sunrise + data.timezone) * 1000))} /></div>
              <div className="w-1/2 h-32 border-l-2 border-b-2 p-4"><Tile title="Sunset" body={getHour(new Date((data.sys.sunset + data.timezone) * 1000))} /></div>
              <div className="w-1/2 h-32 border-t-2 border-r-2 p-4"><Tile title="Humidity" body={data.main.humidity + '%'} /></div>
              <div className="w-1/2 h-32 border-t-2 border-l-2 p-4"><Tile title="Visibility" body={data.visibility / 1000 + ' km'} /></div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { city } = context.query;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["weather", city], () =>
    fetchWeather(city as string)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default CityWeather;
