import React, { useContext, useEffect, useState } from "react";
import Forecast from "./Forecast/Forecast.tsx";
import { SwitchContext } from "../context/switchConetxt.js";
import Clock from "./Clock/Clock.tsx";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { motion } from "framer-motion";
import { TimeContext } from "../context/TimeContext.js";

const Card = ({ data, location }) => {
  const [image, setImage] = useState<string>();
  const [date, setDate] = useState<string>();
  const [time, setTime] = useState<string>();
  const {curTime}   = useContext(TimeContext);

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
    console.log({hour});
    if (hour > 12) {
      hour = hour - 12;
      ap = "pm";
    }
    setTime(`${hour}:${both[1].split(":")[1]} ${ap}`);
  };

  return (
    <div className="mb-20 rounded-lg my-8 mx-auto overflow-x-hidden flex max-w-[1200px]  backdrop-blur-sm bg-[#ffffff30] border  border-[#f7f7f720] shadow-xl">
      <div id="card-left" className="bg-opacity-30 p-16 rounded-xl" style={{backdropFilter: 'blur(2.3px)', backgroundColor: "rgba(100, 100, 100, 0.4)", WebkitBackdropFilter: "blur(2.3px)"}} >
        <div className="flex flex-col font-bold">
          <span className="text-4xl my-3 text-white">{data.location.name}</span>
          <span className="text-2xl my-3">{data.location.region}</span>
          <span className="text-xl">{data.location.country}</span>
          <div className="mt-10 font-medium">
            <p className="text-xl">Lat: {data.location.lat}</p>
            <p className="text-xl">Lon: {data.location.lon}</p>
          </div>
          <div className="flex flex-col mt-5 text-xl font-medium">
            <span>{date}</span>
            <span>{time}</span>
            {/* <span>{curTime} {time?.split(" ")[1]}</span> */}
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
              <motion.div className="mx-3 h-[30px] w-[30px] rounded-[50%] flex justify-center items-center cursor-pointer " whileHover={{rotate:45, transformOrigin: "center", boxShadow: "0 0 0 2px rgba(16,12,8)" }} whileTap={{
    scale: 0.8,
    rotate: 540,
  }}>
                
              <HiOutlineSwitchHorizontal size={18} className="" onClick={() => setScale()} />
              </motion.div>

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
            <p className="my-10 text-4xl text-white font-semibold w-[400px]">
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
