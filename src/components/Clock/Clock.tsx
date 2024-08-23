import React, { useContext, useEffect, useState } from "react";
import moment from "moment-timezone";
import { TimeContext } from "../../context/TimeContext";

const Clock = ({ zone }) => {
  const [second, setSecond] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [hour, setHour] = useState<number>(0);
  const { setCurTime } = useContext(TimeContext);

  
  const setTime = () => {

    const nowDate = moment.tz(zone);
    
    //console.log({ thereDate: nowDate });
    // console.log({ hour: nowDate.hour() });
    // console.log({ minute: nowDate.minute() });
    // console.log({ second: nowDate.second() });

    setSecond(nowDate.second());
    setMinute(nowDate.minute());
    setHour(nowDate.hour());
    setCurTime(hour+':'+minute+':'+second);
  };
  useEffect(() => {
    setTime();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("wating");
      setTime();
    }, 1000);
    return () => clearInterval(interval);
  }, [second]);

  return (
    <div
      id="clock"
      className="m-20 rounded-[50%] w-[200px] h-[200px] shadow-[0_0_0_2px_rgb(255,255,255)] relative" style={{backdropFilter: 'blur(2.3px)', backgroundColor: "rgba(100, 100, 100, 0.2)", WebkitBackdropFilter: "blur(2.3px)"}}
    >
      <div
        className="absolute translate-x-[95px] translate-y-[30px] h-[70px] w-[6px] bg-[#290d4f]"
        style={{
          transform: `translate(95px, 30px) rotate(${hour * 30}deg)`,
          transformOrigin: "bottom",
        }}
      ></div>
      <div
        className="absolute translate-x-[95px] translate-y-[30px] h-[90px] w-[4px] bg-[#ce2175]"
        style={{
          transform: `translate(95px, 10px) rotate(${minute * 6}deg)`,
          transformOrigin: "bottom",
        }}
      ></div>
      <div
        className="bg-[#266aaa] absolute translate-x-[95px] translate-y-[100px] h-[90px] w-[3px]"
        style={{
          transform: `translate(95px, 100px) rotate(${180 + second * 6}deg)`,
          transformOrigin: "top",
        }}
      ></div>
      <div className="absolute rounded-[50%] translate-x-[90px] translate-y-[90px] w-[20px] h-[20px] bg-[#110117]"></div>
    </div>
  );
};

export default Clock;
