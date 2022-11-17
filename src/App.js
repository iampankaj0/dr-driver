import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import HourlyDriver from "./components/hourly-driver/HourlyDriver";
import OutstationDriver from "./components/outstation-driver/OutstationDriver";
import MonthlyDriver from "./components/monthly-driver/MonthlyDriver";
import InCityForm from "./components/incity/InCityForm";
import MonthlyFixDriver from "./components/monthly-section/MonthlyFixDriver";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/dr-driver" element={<Home />} />
        <Route exact path="/hourly-driver" element={<HourlyDriver />} />
        <Route exact path="/outstation-driver" element={<OutstationDriver />} />
        <Route exact path="/monthly-driver" element={<MonthlyDriver />} />
        <Route exact path="/apply-incity-driver" element={<InCityForm />} />
        <Route exact path="/apply-outstation-driver" element={<InCityForm />} />
        <Route exact path="/apply-monthly-driver" element={<MonthlyFixDriver />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
