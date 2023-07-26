import React from "react";
import Header from "./components/Header";
import WeatherApp from "./components/WeatherApp";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full max-h-fit font-outfit bg-[#27374D] text-[#DDE6ED]">
      <Header />
      <WeatherApp />
      <Footer />
    </div>
  );
}

export default App;
