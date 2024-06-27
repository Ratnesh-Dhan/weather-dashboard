import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ForecastCards from './ForecastCards.tsx';

const Forecast = ({location}) => {
  const [data, setData] = useState<Record<string, any>>();
  const [ary, setAry] = useState([]);
  
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BASE_URL}forecast.json?key=${process.env.REACT_APP_WEATHER_API}&q=${location}&aqi=no`).then((response)=> 
      {
        setData(response.data);
    }).catch((error)=>{
      console.log(error);
    });
  },[location]);

  useEffect(()=>{
    if(data !== undefined) {
      console.log(data?.forecast?.forecastday[0].hour)
      setAry(data?.forecast?.forecastday[0].hour);
      //const { forecast } = data;
      //console.log(forecastday[0]);
    }
  },[data]);

  return (
    <div className='flex overflow-x-auto w-[850px] border rounded-xl'>{ary.map((h, index)=>( <ForecastCards hour={h} key={index} />))}</div>
  )
}

export default Forecast