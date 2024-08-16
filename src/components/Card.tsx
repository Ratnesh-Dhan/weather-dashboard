import React, { useContext, useEffect, useState } from "react";
import Forecast from "./Forecast/Forecast.tsx";
import { SwitchContext } from "../context/switchConetxt.js";
import TimeBox from "./TimeBox.tsx";
import Clock from "./Clock/Clock.tsx";

const Card = ({ data, location }) => {
  const [image, setImage] = useState<string>();
  const [date, setDate] = useState<string>();
  const [time, setTime] = useState<string>();
  //const [scale, setScale] = useState<boolean>(true);

  const { digree, setScale } = useContext(SwitchContext);

  useEffect(() => {
    //console.log(data.current.condition.text);
    //console.log(data.current);
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
    <div className="border rounded-lg px-4 mt-8 mx-auto overflow-x-hidden flex max-w-[1200px] ">
      <div className=" p-16 border rounded-xl">
        <div className="flex flex-col">
          <span className="text-3xl my-3">{data.location.name}</span>
          <span>{data.location.region}</span>
          <span className="font-poppins mb-5">{data.location.country}</span>
          <div>
            <p>Lat: {data.location.lat}</p>
            <p>Lon: {data.location.lon}</p>
          </div>
          <div className="flex flex-col">
            <span>{date}</span>
            <span>{time}</span>
            {/* <TimeBox
              lat={data.location.lat}
              lon={data.location.lon}
              zone={data.location.tz_id}
            /> */}
          </div>
        </div>
      </div>
      <div className=" flex-1 w-full">
        <div className="flex">
          <div className="flex flex-col m-4">
            <div className="flex">
              {digree ? (
                <span className="py-2 text-3xl">{data.current.temp_c} °C</span>
              ) : (
                <span className="py-2 text-3xl">{data.current.temp_f} °F</span>
              )}
              <button className="mx-3 border" onClick={() => setScale()}>
                switch
              </button>
              <img src={image} alt="weather icon" width="50" height="60" />
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
