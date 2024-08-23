import logo from "./logo.svg";
import "./App.css";
import Weather from "./components/Weather.tsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
          <Weather />
      
    </>
  );
}

export default App;
