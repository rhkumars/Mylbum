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
        <Route path="/" element={<FetchContent />} />
        <Route path="/gallery/:id" element={<Gallery />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/cards/:id" element={<Cards />} />
        <Route path="*" element={<FetchContent />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
