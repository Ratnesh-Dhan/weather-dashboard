import { Children, createContext, useState } from "react";

const SwitchContext = createContext({
  digree: true,
  setScale: () => {},
});

const SwitchProvider = ({ children }) => {
  //this setScale function is not nessessary
  const setScale =()=>{
    setDigree(!digree);
  }
  const [digree, setDigree] = useState(true);
  return (
    <SwitchContext.Provider value={{ digree, setScale }}>
      {children}
    </SwitchContext.Provider>
  );
};

export { SwitchContext, SwitchProvider };
