import React, { createContext, useContext, useState, ReactNode } from "react";
import { Character } from "../../types/constants";

interface StarredContextType {
  starredCharacters: Character[];
  addCharacter: (character: Character) => void;
  removeCharacter: (id: string) => void;
}

const StarredContext = createContext<StarredContextType | undefined>(undefined);

export const useStarred = () => {
  const context = useContext(StarredContext);
  if (!context) {
    throw new Error("useStarred must be used within a StarredProvider");
  }
  return context;
};

export const StarredProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [starredCharacters, setStarredCharacters] = useState<Character[]>([]);

  const addCharacter = (character: Character) => {
    setStarredCharacters((prevCharacters) => {
      const exists = prevCharacters.some((char) => char.id === character.id);
      if (exists) {
        return prevCharacters;
      }
      return [...prevCharacters, character];
    });
  };

  const removeCharacter = (id: string) => {
    setStarredCharacters((prevCharacters) => prevCharacters.filter((char) => char.id !== id));
  };

  return (
    <StarredContext.Provider value={{ starredCharacters, addCharacter, removeCharacter }}>
      {children}
    </StarredContext.Provider>
  );
};
  