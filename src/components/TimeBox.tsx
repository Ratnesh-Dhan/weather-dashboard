import axios from "axios";
import React, { useEffect, useState } from "react";

const TimeBox = ({ lat, lon, zone }) => {
  const [current, setCurrent] = useState<any>();

  useEffect(() => {
    const time = new Date().toLocaleString();
    setCurrent(time);
    // axios
    //   .get(`${process.env.REACT_APP_TIME_URL}latitude=${lat}&longitude=${lon}`)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log({fuckery: error.message});
    //   });
  }, [lat, lon]);

  return <div>bullshi=
    <div>{current}</div>
    <div>{lat}  {lon}</div>
  </div>;
};
export default TimeBox;
