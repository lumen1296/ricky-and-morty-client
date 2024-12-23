import React from "react";
import { Sidebar } from "../components/sidebar";
import { StarredProvider } from "../components/context/starred-context";
import { CharacterDetails } from "../components/character-details";
import { CharacterProvider } from "../components/context/detail-context";

export const Home: React.FC = () => {


  return (
    <div className="flex h-screen bg-gray-100">
      <StarredProvider>
      <Sidebar/>
      </StarredProvider>
    </div>

  );
};