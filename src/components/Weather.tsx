import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Card from "./Card.tsx";
import axiosConfig from "../axiosConfig.js";

const Weather = () => {
  const [location, setLocation] = useState<any>("");
  const [data, setData] = useState(null);

  const handleClick = async () => {
    axiosConfig
      .get(`current.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&aqi=no`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        if (error.response.status === 400) {
          toast.error("Enter location correctly");
        }
      });
  };

  useEffect(() => {
    //console.log(data);
  }, [data]);

  return (
    <>
      <div className="flex justify-center max-w-screen">
        <input
          className="border border-slate-400 px-3 m-4 rounded-lg w-[40%]"
          placeholder="enter zip code or city name"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          className="border rounded-[50%] border-slate-400 py-3 px-4 m-3 text-lg bg-slate-900 text-yellow-100 font-semibold"
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
    </>
  );
};

export default Weather;
