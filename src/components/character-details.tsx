import React, { useEffect } from "react";
import { useCharacter } from "./context/detail-context";
import { Character } from "../types/constants";

type CharacterDetailsProps = {
    character?: Character
};

export const CharacterDetails: React.FC<CharacterDetailsProps> = ({ character }) => {

    if (!character) {
        return (
            <div className="flex items-center justify-center flex-1 text-gray-500">
                Select a character to see details
            </div>
        );
    }

    return (
        <div className="flex-1 p-8">
            <div className="text-left">
                <img 
                    src={character.image}
                    alt={character.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 text-left"
                />
                <h1 className="text-2xl font-bold">{character.name}</h1>
            </div>
            <ul className="mt-6 space-y-2">
                <li>
                    <strong>Specie:</strong> {character.species}
                </li>
                <li>
                    <strong>Status:</strong> {character.status}
                </li>
            </ul>
        </div>
    );
};
