import { Children, createContext, useState } from "react";

const SwitchContext = createContext({
  digree: true,
  setDigree: () => {},
});

const SwitchProvider = ({ children }) => {
  const [digree, setDigree] = useState < Boolean > true;
  return (
    <SwitchContext.Provider value={{ digree, setDigree }}>
      {children}
    </SwitchContext.Provider>
  );
};

export { SwitchContext, SwitchProvider };
