import React, { useContext } from "react";
import { SwitchContext } from "../../context/switchConetxt";

const ForecastCards = ({ hour }) => {
  const { digree } = useContext(SwitchContext);
  return (
    <div className="border-r p-5 m-5">
      <p>{hour.time}</p>
      {digree ? <p>{hour.temp_c} °C</p> : <p>{hour.temp_f} °F</p>}
    </div>
  );
};

export default ForecastCards;
