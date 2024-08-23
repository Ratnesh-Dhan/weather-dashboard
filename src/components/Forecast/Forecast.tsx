import axiosConfig from "../../axiosConfig";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ForecastCards from "./ForecastCards.tsx";

const Forecast = ({ location }) => {
  const [data, setData] = useState<Record<string, any>>();
  const [ary, setAry] = useState([]);

  useEffect(() => {
    axiosConfig
      .get(
        `forecast.json?key=${process.env.REACT_APP_API_KEY}&days=1&&q=${location}&aqi=no`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [location]);

  useEffect(() => {
    if (data !== undefined) {
      //console.log(data?.forecast?.forecastday[0].hour);
      setAry(data?.forecast?.forecastday[0].hour);
      //const { forecast } = data;
      //console.log(forecastday[0]);
    }
  }, [data]);

  return (
    // w-[850px]
    <div className="scroller flex overflow-x-scroll rounded-xl w-[810px]">
      {ary.map((h, index) => (
        <ForecastCards hour={h} key={index} />
      ))}
    </div>
  );
};

export default Forecast;
