import Dashboardlayout from "./Layout/Dashboardlayout";
import "./App.css";
import Overview from "./Pages/Overview";
import Appointment from "./Pages/Appointment";
import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboardlayout />}>
        <Route index element={<Overview />} />
        <Route path="appointment" element={<Appointment />} />
      </Route>
    </Routes>
  );
}

export default App;