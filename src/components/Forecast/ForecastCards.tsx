import React, { useContext } from "react";
import { SwitchContext } from "../../context/switchConetxt";

const ForecastCards = ({ hour }) => {
  const { digree } = useContext(SwitchContext);
  return (
    <div className="border-r p-5 m-5">
      <p className="text-white text-lg">{hour.time.split(" ")[1]}</p>
      <p className="font-bold whitespace-nowrap">{digree ? `${hour.temp_c} °C` : `${hour.temp_f} °F`}</p>
    </div>
  );
};

export default ForecastCards;
