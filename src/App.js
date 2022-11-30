import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import HourlyDriver from "./components/hourly-driver/HourlyDriver";
import OutstationDriver from "./components/outstation-driver/OutstationDriver";
import MonthlyDriver from "./components/monthly-driver/MonthlyDriver";
import InCityForm from "./components/incity/InCityForm";
import MonthlyFixDriver from "./components/monthly-section/MonthlyFixDriver";
import MakeEnquiry from "./components/makeEnquiry/MakeEnquiry";
import MyRides from "./components/myRides/MyRides";
import AgentLogin from "./components/agent-login/AgentLogin";
import AboutUs from "./components/about-us/AboutUs";
import DriverLogin from "./components/driver-login/DriverLogin";
import ApplyDriverJob from "./components/apply-driver-job/ApplyDriverJob";
import RatingReviews from "./components/rating-reviews/RatingReviews";

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
        <Route exact path="/make-enquiry" element={<MakeEnquiry />} />
        <Route exact path="/my_rides" element={<MyRides />} />
        <Route exact path="/agent-login" element={<AgentLogin />} />
        <Route exact path="/driver-login" element={<DriverLogin />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/apply-driver-job" element={<ApplyDriverJob />} />
        <Route exact path="/ratings-and-review" element={<RatingReviews />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
