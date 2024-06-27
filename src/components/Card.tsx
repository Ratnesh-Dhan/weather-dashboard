import React, { useEffect, useState } from "react";
import Forecast from "./Forecast/Forecast.tsx";

const Card = ({ data, location }) => {
  const [image, setImage] = useState<string>();
  const [scale, setScale] = useState<boolean>(true);
  useEffect(() => {
    //console.log(data.current.condition.text);
    //console.log(data.current);
    setImage(`https:${data.current.condition.icon}`);
 
  }, [data]);
  
  return (
    <div className="border rounded-lg px-4 mt-8 mx-auto overflow-x-hidden flex max-w-[1200px] ">
      <div className=" p-2 border rounded-xl w-1/4">
        <div className="flex flex-col">
          <span className="text-xl my-3">{data.location.name}</span>
          <span>{data.location.region}</span>
          <span className="font-poppins">{data.location.country}</span>
          <div>
            <p>
              Lat: {data.location.lat} Lon: {data.location.lon}
            </p>
          </div>
          <span>{data.location.localtime}</span>
      
        </div>
        
      </div>
      <div className="border border-red-700 flex-1 w-full">
        <div className="flex flex-col m-4">
          <div className="flex">
            {scale ? (
              <span className="py-2 text-3xl">{data.current.temp_c} °C</span>
            ) : (
              <span className="py-2 text-3xl">{data.current.temp_f} °F</span>
            )}
            <button className="mx-3 border" onClick={() => setScale(!scale)}>
              switch
            </button>
            <img src={image} alt="weather icon" width="50" height="60" />
          </div>
          <div className="flex my-3">
          <p className="mr-2">feels like</p>{scale? <span>{data.current.feelslike_c} °C</span>: <span>{data.current.feelslike_f} °F</span>}
          </div>
          <p className="my-10 text-4xl text-white font-poppins">{data.current.condition.text}</p>
        </div>
        <div className="">
          <Forecast location={location} />
        </div>
      </div>
    </div>
  );
};

export default Card;
