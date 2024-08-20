import React, { useContext, useEffect, useState } from "react";
import Forecast from "./Forecast/Forecast.tsx";
import { SwitchContext } from "../context/switchConetxt.js";
import Clock from "./Clock/Clock.tsx";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

const Card = ({ data, location }) => {
  const [image, setImage] = useState<string>();
  const [date, setDate] = useState<string>();
  const [time, setTime] = useState<string>();

  const { digree, setScale } = useContext(SwitchContext);

  useEffect(() => {
    dateTimeFunc();
    setImage(`https:${data.current.condition.icon}`);
  }, [data]);

  const dateTimeFunc = () => {
    let ap = "am";
    const both = data.location.localtime.split(" ");
    setDate(both[0]);
    let hour = Number(both[1].split(":")[0]);
    if (hour > 12) {
      hour = 12 - hour;
      ap = "pm";
    }
    setTime(`${hour}:${both[1].split(":")[1]} ${ap}`);
  };

  return (
    <div className="border rounded-lg px-4 my-8 mx-auto overflow-x-hidden flex max-w-[1200px] bg-[url('/public/bg.jpg')] bg-cover bg-center backdrop-blur-lg">
      <div id="card-left" className="bg-opacity-30 p-16 border rounded-xl" style={{backdropFilter: 'blur(2.3px)', backgroundColor: "rgba(255, 255, 255, 0.3)", WebkitBackdropFilter: "blur(2.3px)"}} >
        <div className="flex flex-col font-bold">
          <span className="text-4xl my-3 text-[#86AB89]">{data.location.name}</span>
          <span className="text-2xl my-3">{data.location.region}</span>
          <span className="text-xl">{data.location.country}</span>
          <div className="mt-10 font-medium">
            <p className="text-xl">Lat: {data.location.lat}</p>
            <p className="text-xl">Lon: {data.location.lon}</p>
          </div>
          <div className="flex flex-col mt-5 text-xl font-medium">
            <span>{date}</span>
            <span>{time}</span>
          </div>
        </div>
      </div>
      <div className=" flex-1 w-full">
        <div className="flex">
          <div className="flex flex-col m-4">
            <div className="flex text-xl">
              {digree ? (
                <span className="py-2 text-3xl">{data.current.temp_c} °C</span>
              ) : (
                <span className="py-2 text-3xl">{data.current.temp_f} °F</span>
              )}
              <HiOutlineSwitchHorizontal className="mx-3 rounded hover:shadow-[1px_1px_0_3px_rgba(16,12,8)]" onClick={() => setScale()} />

              <img src={image} alt="weather icon" width="50" height="50" />
            </div>
            <div className="flex my-3">
              <p className="mr-2">feels like</p>
              {digree ? (
                <span>{data.current.feelslike_c} °C</span>
              ) : (
                <span>{data.current.feelslike_f} °F</span>
              )}
            </div>
            <p className="my-10 text-4xl text-white font-poppins w-[400px]">
              {data.current.condition.text}
            </p>
          </div>
          <Clock zone={data.location.tz_id}/>
        </div>
        <div className="">
          <Forecast location={location} />
        </div>
      </div>
    </div>
  );
};

export default Card;
