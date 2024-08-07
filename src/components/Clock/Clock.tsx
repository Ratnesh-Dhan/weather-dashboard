import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';

const Clock = ({zone}) => {
  const [second, setSecond] = useState<number>(0);

  useEffect(()=> {
    const nowDate = moment.tz(zone);
    console.log({thereDate: nowDate});
  },[]);

  useEffect(()=> {
    const interval = setInterval(()=>{
      if(second === 60) {
        setSecond(0);
      }
      else {
        setSecond(second + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  },[second]);

  return (
    <div id="clock" className="m-20 rounded-[50%] w-[200px] h-[200px] bg-white shadow-[0_0_0_10px_rgb(1,16,1)] relative">
      <div className="absolute translate-x-[95px] translate-y-[30px] h-[70px] w-[10px] bg-[#290d4f] origin-bottom rotate-45 transform-origin-top"></div>
      <div className="bg-[#266aaa] absolute translate-x-[95px] translate-y-[100px] h-[90px] w-[6px]" style={{transform: `translate(95px, 100px) rotate(${second*6}deg)`, transformOrigin: 'top'}}></div>
    </div>
  )
}

export default Clock