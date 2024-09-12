import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Card from "./Card.tsx";
import axiosConfig from "../axiosConfig.js";
import Loading from "./Loading.tsx";
import { RingLoader } from "react-spinners";

const Weather = () => {
  const [location, setLocation] = useState<any>("");
  const [data, setData] = useState(null);
  const [autoLocation, setAutoLocation] = useState<string>("");

  const handleClick = async (pos = location) => {
    axiosConfig
      .get(`current.json?key=${process.env.REACT_APP_API_KEY}&q=${pos}&aqi=no`)
      .then((response) => {
        setData(response.data);
        setLocation(response.data.location.name);
      })
      .catch((error) => {
        if (error.response.status === 400) {
          toast.error("Enter location correctly");
        }
      });
      
  };
  const handleKeyEnter = (event) => {
    if (event.key === "Enter") {
      handleClick();
      //console.log("enter");
    }
  }

  useEffect(()=>{
    console.log(navigator)
    if("geolocation" in navigator)
      navigator.geolocation.getCurrentPosition((position)=> {
      const  { coords: {latitude, longitude}} = position;
      const curLocation = latitude +","+ longitude;
      console.log({curLocation})
      setAutoLocation(curLocation);
      //setLocation(curLocation);
      handleClick(curLocation);
    });
  },[]);
  
  if(autoLocation=== "")
    return(
      <div  className="flex justify-center items-center h-screen bg-slate-200"> 
        {/* <Loading /> */}
        <RingLoader size={80} color="#6c58dd" />
      </div>
  );

  return (
    <>
    <div className=" h-dvh w-screen " >
    <img src="/bg.jpg" alt="bg" className="w-screen h-dvh object-cover fixed z-[-1]" />
      <div className="flex justify-center max-w-screen ">
        <input
          className="border border-slate-400 px-3 my-4 rounded-tl-lg py-3 rounded-bl-lg w-[40%]"
          placeholder="enter city name"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={handleKeyEnter}
        />
        <button
          className="border rounded-tr-lg rounded-br-lg border-slate-400 px-4 my-4 text-lg bg-[#86AB89] text-yellow-100 font-semibold"
          onClick={handleClick}
        >
          Go
        </button>
      </div>
      <div className="">
        {data !== null ? (
          <Card {...{ data, location }} />
        ) : (
          <h2 className="text-center text-4xl text-white font-bold mt-20">
            Weather Dashboard
          </h2>
        )}
      </div>
    </div>
    </>
  );
};

export default Weather;
