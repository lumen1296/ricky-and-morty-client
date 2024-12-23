// CharacterContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Character } from "../../types/constants"; // Asume que tienes un tipo Character

interface CharacterContextType {
  selectedCharacter: Character | null;
  selectCharacter: (character: Character) => void;
}

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export const useCharacter = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error("useCharacter must be used within a CharacterProvider");
  }
  return context;
};

export const CharacterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const selectCharacter = (character: Character) => {
    
    setSelectedCharacter(character||{});

  };

  return (
    <CharacterContext.Provider value={{ selectedCharacter, selectCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};
