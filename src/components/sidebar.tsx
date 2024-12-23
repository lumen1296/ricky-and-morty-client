import { useQuery } from "@apollo/client";
import React from "react";
import { GET_CHARACTERS } from "../apollo/queries/characters.query";
import { CharacterList } from "./character-list";
import { useStarred } from "./context/starred-context";
import { FilterButton } from "./filter-button";
import { SearchBar } from "./search-bar";
import { CharacterProvider } from "./context/detail-context";

export const Sidebar: React.FC = () => {
  const { data, loading, error } = useQuery(GET_CHARACTERS);
  const { starredCharacters } = useStarred();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="w-80 bg-white border-r shadow-md flex flex-col">
      <div className="p-4">
        <SearchBar />
        <FilterButton />
      </div>
      <div className="flex-1 overflow-y-auto">
        <CharacterList characters={starredCharacters} title="Starred Characters"  isStarred={true}/>
        <CharacterProvider>
        <CharacterList characters={data?.characters || []} title="Characters"isStarred={false} />
        </CharacterProvider>
      </div>
    </div>
  );
};

