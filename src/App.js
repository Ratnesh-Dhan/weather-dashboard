import logo from "./logo.svg";
import "./App.css";
import Weather from "./components/Weather.tsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <div className="bg-slate-600 min-h-screen">
        <Weather />
      </div>
    </>
  );
}

export default App;
