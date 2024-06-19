import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Authentication/Auth";
import Settings from "./Settings/Settings";
import FetchContent from "./Content/FetchContent";
import Cards from "./Cards/Cards";
import Gallery from "./Gallery/Gallery";

const AppRoutes = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<FetchContent />}></Route>
        <Route path="/gallery/:id" element={<Gallery />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/cards/:id" element={<Cards />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
