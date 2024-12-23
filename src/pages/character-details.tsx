import React from "react";
import { Sidebar } from "../components/sidebar";
import { StarredProvider } from "../components/context/starred-context";
import { CharacterDetails } from "../components/character-details";
import { CharacterProvider } from "../components/context/detail-context";
import { useLocation } from "react-router-dom";

export const CharacterDetail: React.FC = () => {
    const location = useLocation();
    const character = location.state?.character;

  return (
    <div className="flex h-screen bg-gray-100">
              <StarredProvider>
              <Sidebar/>
              </StarredProvider>
          <CharacterDetails character={character}/>
    </div>

  );
};