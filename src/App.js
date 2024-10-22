import React, { useState } from "react";
import Home from "./components/Home";
import GetWeather from "./components/GetWeather";

function App() {
  const [page, setPage] = useState("home"); // Track the current page

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home onNavigate={() => setPage("weather")} />;
      case "weather":
        return <GetWeather onBack={() => setPage("home")} />;
      default:
        return <Home onNavigate={() => setPage("weather")} />;
    }
  };

  return <div>{renderPage()}</div>;
}

export default App;
