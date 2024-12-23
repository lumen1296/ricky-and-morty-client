import React from "react";
import { CharacterListItem } from "./character-list-tem";
import { Character } from "../types/constants";

type CharacterListProps = {
  characters: Character[],
  title: string,
  isStarred: boolean
};

export const CharacterList: React.FC<CharacterListProps> = ({ characters, title, isStarred }) => {


  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
      {characters.map((character: any) => (
          <CharacterListItem key={character.id} character={character} isStarred={isStarred}/>
        ))}
      </ul>
    </div>
  );
};
