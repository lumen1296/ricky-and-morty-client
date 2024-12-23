import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { CharacterDetail } from "../pages/character-details";

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character-details" element={<CharacterDetail/>} />
    </Routes>
  </Router>
);

export default AppRoutes;