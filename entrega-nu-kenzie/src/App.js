import { useState } from "react";
import "./App.css";
import { HomePage } from "./components/HomePage/HomePage";
import { LandingPage } from "./components/LandingPage/LandingPage";

function App() {
  const [landingPage, setLandingPage] = useState(true);
  return (
    <div className="App">
      {landingPage ? (
        <LandingPage setLandingPage={setLandingPage} />
      ) : (
        <HomePage setLandingPage={setLandingPage} />
      )}
    </div>
  );
}

export default App;
