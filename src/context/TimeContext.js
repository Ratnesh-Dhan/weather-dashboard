import { createContext, useState } from "react";

export const TimeContext = createContext();

export const TimeContextProvider = ({children}) => {
    const [curTime, setCurTime] = useState("")

    return (
        <TimeContext.Provider value={{curTime, setCurTime}}>
            {children}
        </TimeContext.Provider>
    );
}

