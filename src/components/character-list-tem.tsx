import React, { useEffect, useState } from "react";
import { useStarred } from "./context/starred-context";
import { Character } from "../types/constants";
import { useCharacter } from "./context/detail-context";
import { useNavigate } from "react-router-dom";

type CharacterListItemProps = {
  character: Character;
  isStarred: boolean;
};

export const CharacterListItem: React.FC<CharacterListItemProps> = ({ character, isStarred }) => {
  const { addCharacter, removeCharacter } = useStarred();
  const navigate = useNavigate(); // Usamos el hook useNavigate para navegar

  const handleCharacterClick = (character: Character) => {
    // Navegamos a CharacterDetails pasando el personaje a través del state
    navigate("/character-details", { state: { character } });
  };
  return (
    <li className="flex items-center p-2 rounded-md hover:bg-gray-100">
      <img
        src={character.image}
        alt={character.name}
        className="w-10 h-10 rounded-full object-cover mr-4"
      />
      <div className="flex-1" onClick={() => handleCharacterClick(character)}>
        <h4 className="font-medium">{character.name}</h4>
        <p className="text-sm text-gray-500">{character.species}</p>
      </div>
      <button
        className={`p-1 text-lg ${isStarred ? "text-red-500" : "text-gray-400"
          }`}
        onClick={isStarred ? () => removeCharacter(character.id) : () => addCharacter(character)}
      >
        {isStarred ? "❤️" : "🤍"}
      </button>
    </li>
  );
};
