import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { Sidebar } from "./components/sidebar";
import { StarredProvider } from "./components/context/starred-context";
import { Home } from "./pages/home";
import { CharacterDetails } from "./components/character-details";
export const App: React.FC = () => {
  return (
      <StarredProvider>
        <BrowserRouter >
          <AppRoutes />
        </BrowserRouter >
      </StarredProvider>
  );
};