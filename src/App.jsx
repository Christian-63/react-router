import Dashboardlayout from "./Layout/Dashboardlayout";
import "./App.css";
import Overview from "./Pages/Overview";
import Appointment from "./Pages/Appointment";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./auth/Login";
import ProtectedRoute from "./Routes/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={
         <ProtectedRoute>
        <Dashboardlayout />
        </ProtectedRoute>}>
        <Route index element={<Overview />} />
        <Route path="appointment" element={<Appointment />} />
      </Route>
      <Route path="/Login" element={<Login/>} />
    </Routes>
  );
}

export default App;